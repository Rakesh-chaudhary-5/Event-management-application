import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-1.png";
import "../App.css";

export default function Header() {
  return (
    <header className="flex justify-center w-full">
      <nav className="flex justify-between items-center px-4 py-6 sm:p-6 w-[1275px]">
        {/* Logo */}
        <img src={Logo} className="w-32 sm:w-48" alt="logo" />

        {/* navigation Links */}
        <div className="text-lg font-semibold flex gap-2 sm:gap-6">
          <Link to={"/"} className="rounded-lg navBtn transition">
            Home
          </Link>
          <Link
            to={"/upcoming-events"}
            className="rounded-lg navBtn transition"
          >
            Events
          </Link>
        </div>
      </nav>
    </header>
  );
}
