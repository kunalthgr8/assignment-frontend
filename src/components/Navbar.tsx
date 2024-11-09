import { useState, useEffect, useRef } from "react";
import { navItems } from "@/constants";
import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 py-4 shadow-md bg-white z-10">
      <div className="md:max-w-screen-lg flex justify-between items-center px-5 mx-auto">
        <Logo />
        {/* Desktop menu */}
        <ul className="hidden gap-x-12 md:flex">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={
                item.href === location.pathname
                  ? "text-blue-600 border-b-2 hsl(var(--border)) border-blue-600"
                  : "hover:border-b-2 hover:border-black"
              }
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon */}
        <div className="md:hidden gap-x-12 mr-10">
          <RxHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 right-5 bg-white shadow-md rounded-lg w-48 p-4`}
      >
        <ul className="flex flex-col gap-y-4">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`${
                item.href === location.pathname
                  ? "text-blue-600 border-b-2 hsl(var(--border)) border-blue-600"
                  : "hover:border-b-2 hover:border-black"
              } w-full`}
            >
              <a href={item.href} className="px-12">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
