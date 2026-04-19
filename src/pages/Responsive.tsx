"use client";

import Image from "next/image";
import { navLinks } from "../constant/Navlink";
import { Logo } from "../image";


type ResponsiveMenuProps = {
  showMenu: boolean;
};
const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "left-[-100%]"}
   fixed  top-0 z-50 w-[75%] bg-white h-screen flex flex-col py-8 px-8  dark:bg-gray-900 dark:text-white`}
    >
      <div>
        <Image src={Logo} alt="image" className="w-20" />
      </div>

      <div>
        <ul className="flex  flex-col gap-4">
          {navLinks.map((page) => (
            <li
              key={page.id}
              className="text-lg font-semibold hover:text-primary border-b dark:border-gray-800 border-gray-100 "
            >
              <a href={page.path}>{page.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <button className="primary-btn">join now</button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;