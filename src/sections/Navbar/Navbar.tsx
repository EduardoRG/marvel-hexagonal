import { Button } from "../shared/Button";

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 py-4 px-16 flex justify-between items-center">
      <div className="text-2xl font-bold">Heroes</div>
      <div className="flex gap-2">
        <Button variant="text">Heroes</Button>
        <Button variant="text">Teams</Button>
      </div>
    </nav>
  );
};
