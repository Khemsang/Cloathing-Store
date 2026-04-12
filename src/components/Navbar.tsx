"use client";

import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { Logo } from "../image";
import { navIcons, navLinks } from "../constant/Navlink";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white ">

      <div className="flex justify-between items-center px-4 md:px-10 py-4 gap-6">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <p className="font-semibold text-lg">Store</p>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="flex items-center w-full h-11 border border-gray-300 rounded-full overflow-hidden">

            <select className="h-full px-3 border-r border-gray-200 outline-none text-sm bg-transparent">
              <option>Nepal</option>
              <option>India</option>
              <option>USA</option>
            </select>

            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 h-full px-4 outline-none text-sm"
            />

            <button className="h-full px-4 flex items-center justify-center hover:bg-gray-100 transition">
              <FiSearch size={16} />
            </button>

          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="text-gray-700 hover:text-black transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ICONS + MENU */}
        <div className="flex items-center gap-6">

          <ul className="flex items-center gap-5 text-xl">
            {navIcons.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="hover:text-black transition cursor-pointer"
                >
                  <item.icon />
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE MENU */}
          <button className="lg:hidden text-2xl">
            <CiMenuBurger />
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;