import React from "react";
import {
  brands,
  categories,
  contact,
  footerLinks,
  paymentMethods,
  socialMedia,
} from "../constant/Footer";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import Image from "next/image";
import { Logo } from "../image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* BRAND */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Brand</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              {brands.map((item) => (
                <li key={item.id}>
                  <a href="#" className="hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORY */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Category</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              {categories.map((item) => (
                <li key={item.id}>
                  <a href="#" className="hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LINKS */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {footerLinks.map((section) => (
                <div key={section.id}>
                  <h3 className="font-semibold mb-3">{section.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {section.links.map((link, idx) => (
                      <li key={idx} className="hover:text-white cursor-pointer">
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="border-t border-gray-700 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

          {/* APP */}
          <div>
            <h3 className="font-semibold mb-3">Download our app</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <BiLogoPlayStore size={26} />
              <FaAppStoreIos size={26} />
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-3">Follow us</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              {socialMedia.map((item) => (
                <a key={item.id} href="#" className="hover:text-gray-300">
                  <item.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-3">Need help?</h3>
            <div className="text-gray-300 text-sm space-y-1">
              {contact.phoneNumbers.map((num) => (
                <p key={num}>{num}</p>
              ))}
            </div>
          </div>

          {/* LOGO */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2">
            <Image src={Logo} alt="logo" height={40} width={100} />
            <span className="text-lg font-bold">Store</span>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 py-6 flex flex-col lg:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-400 text-center lg:text-left">
            © {new Date().getFullYear()} Temptics. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {paymentMethods.map((item) => (
              <div key={item.id} className="bg-white p-2 rounded-md">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;