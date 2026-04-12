import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { Logo } from "../image";
import { navIcons, navLinks } from "../constant/Navlink";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50 bg-white ">

      <div className="flex justify-between items-center px-3 text-xl py-5">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" width={60} height={60} />
          <p className="font-semibold text-lg">Store</p>
        </div>

        <div className="">
          <div className="flex items-center w-full h-12 border border-gray-300 rounded-full overflow-hidden text-gray-700">
            <select className="h-full px-3 border-r border-gray-300 outline-none bg-transparent text-sm">
              <option>Nepal</option>
              <option>India</option>
              <option>USA</option>
            </select>

            <input
              type="text"
              placeholder="search here..."
              className="flex-1 h-full px-4 outline-none"
            />

            <button className="h-full px-5 flex items-center justify-center text-gray-700 hover:bg-gray-200 duration-400 font-normal">
              <FiSearch size={17} />
            </button>
          </div>
        </div>

        <div>
          <ul className="flex h-full  gap-15">
            {navLinks.map((item) => (
              <li key={item.id} className="font-normal">
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center h-full gap-10">
          <div>
            <ul className="flex h-full items-center gap-10">
              {navIcons.map((item) => (
                <li key={item.id} className="text-2xl font-semibold">
                  <item.icon />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <CiMenuBurger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
