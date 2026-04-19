"use client";

import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { Logo } from "../image";
import { navIcons, navLinks } from "../constant/Navlink";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { IoMdClose } from "react-icons/io";
import ResponsiveMenu from "../pages/Responsive";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const [showMenu, setMenu] = useState(false);
  const handelMenuToggle = () => setMenu(!showMenu);
 
  const filteredProducts = products?.filter((item) =>
    item.title?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className=" container flex justify-between items-center px-4 md:px-10 py-4 gap-6">

      
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <p className="font-semibold text-lg">Store</p>
        </div>

  
        <div className="hidden md:flex flex-1 max-w-xl relative">

          <div className="flex items-center w-full h-11 border border-gray-300 rounded-full overflow-hidden">

            <select className="h-full px-3 border-r border-gray-200 outline-none text-sm bg-transparent">
              <option>Nepal</option>
              <option>India</option>
              <option>USA</option>
            </select>

            <input
              type="text"
              placeholder="Search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 h-full px-4 outline-none text-sm"
            />

            <button className="h-full px-4 flex items-center justify-center hover:bg-gray-100 transition">
              <FiSearch size={16} />
            </button>
          </div>

     
          {query && (
            <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-xl max-h-80 overflow-y-auto z-50">

              {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 6).map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    onClick={() => setQuery("")}
                    className="flex items-center gap-3 p-3 hover:bg-gray-100 transition"
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded"
                    />

                    <div>
                      <p className="text-sm font-medium line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {item.category}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="p-3 text-sm text-gray-500">
                  No products found
                </p>
              )}

            </div>
          )}

        </div>

       
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
        <div className=" hidden lg:flex items-center gap-6">

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

        
           

        </div>
         <div className="md:hidden flex items-center gap-3">
             

            {showMenu ? (
              <IoMdClose onClick={handelMenuToggle} />
            ) : (
              <CiMenuBurger onClick={handelMenuToggle} />
            )}
          </div>

      </div>

      <ResponsiveMenu showMenu={showMenu}/>
    </div>
  );
};

export default Navbar;