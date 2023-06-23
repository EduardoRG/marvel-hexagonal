import { act, render, screen, HeroFactory, vi } from "@/test-utils";
import { HeroCreator } from "@/sections/heroes/HeroCreator";

describe("HeroCreator", () => {
  it("renders the hero creator", async () => {
    await act(async () => render(<HeroCreator />));

    expect(
      screen.getByRole("heading", {
        name: "Create new Hero",
      })
    ).toBeInTheDocument();
  });

  it("calls save when submitting form", async () => {
    const hero = HeroFactory.create({ role: "Support", teamId: "default" });
    const save = vi.fn();
    const { user } = render(<HeroCreator />, {
      heroesRepositoryProps: {
        save,
      },
    });

    await user.click(screen.getByRole("button", { name: "Support" }));
    await user.clear(screen.getByLabelText("Name"));
    await user.type(screen.getByLabelText("Name"), hero.name);
    await user.clear(screen.getByLabelText("Description"));
    await user.type(screen.getByLabelText("Description"), hero.description);
    await user.clear(screen.getByLabelText("Image"));
    await user.type(screen.getByLabelText("Image"), hero.thumbnail);
    await user.click(screen.getByRole("button", { name: "Create" }));

    expect(save).toHaveBeenCalledWith({
      ...hero,
      id: expect.any(String),
    });
  });
});
