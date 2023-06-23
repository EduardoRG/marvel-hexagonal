import { act, render, screen } from "@/test-utils";
import { Navbar } from "@/sections/navbar/Navbar";

describe("Navbar", () => {
  it("renders the navbar", async () => {
    await act(async () => render(<Navbar />));

    expect(screen.getByRole("heading", { name: "Heroes" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Heroes" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Teams" })).toBeVisible();
  });
});
