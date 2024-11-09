import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { navItems } from "@/constants";

const NavbarWithSearch = () => {
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
    <nav className="sticky top-0 p-4 shadow-md bg-white z-10">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex">
          <Searchbar />
        </div>

        <div className="md:hidden">
          <RxHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

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
                item.href === location.pathname ||
                location.pathname.startsWith(item.href)
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

export default NavbarWithSearch;
