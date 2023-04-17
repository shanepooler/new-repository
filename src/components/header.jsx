import { Link } from "react-router-dom";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <header className="items-center justify-between sm:flex sm:flex-row sm:pl-8">
      <h1 className="text-2xl font-bold">
        <Link to="/">My App</Link>
      </h1>
      <NavBar />
    </header>
  );
}
