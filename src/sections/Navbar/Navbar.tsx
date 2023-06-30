import { Button } from "../shared/Button";

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 py-4 px-16 flex justify-between items-center backdrop-blur">
      <img
        className="h-12"
        src="https://www.freepnglogos.com/uploads/overwatch-logo-white-15.png"
      />
      <div className="flex gap-2">
        <a href="#heroes">
          <Button variant="text">Heroes</Button>
        </a>
        <a href="#teams">
          <Button variant="text">Teams</Button>
        </a>
      </div>
    </nav>
  );
};
