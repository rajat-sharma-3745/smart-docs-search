import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  { name: "Upload", href: "/upload" },
  { name: "Documents", href: "/documents" },
  { name: "Search", href: "/search" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-linear-to-r from-indigo-600 to-violet-500 transition-all">
      {/* Left: Brand */}
      <Link to="/" className="text-white font-semibold text-lg">
        SmartDocsSearch
      </Link>

      <div className="hidden md:flex items-center gap-8 text-white">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.href}
            className="cursor-pointer hover:underline transition-all"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setOpen((p) => !p)}
        aria-label="menu-btn"
        type="button"
        className="inline-block cursor-pointer md:hidden text-white text-2xl active:scale-90 transition"
      >
        <RxHamburgerMenu />
      </button>

      <div
        className={`fixed top-[70px] left-0 w-full h-screen p-6 bg-linear-to-r from-indigo-700 to-violet-500 text-white flex flex-col md:hidden items-center gap-6 font-medium transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 text-lg">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:underline transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
