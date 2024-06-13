"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="px-[6%] hidden  lg:flex items-center justify-between shadow-md">
        <Link href="home">
          <Image src={logo} alt="logo" className="h-24 w-auto" />
        </Link>
        <ul className="hidden lg:flex cursor-pointer  gap-6 font-bold ">
          <Link href={"home"}>
            <li className="hover:text-gray-500 duration-150">Home</li>
          </Link>
          <Link href={"insurance"}>
            <li className="hover:text-gray-500 duration-150">insurance</li>
          </Link>
          <Link href={"registration"}>
            <li className="hover:text-gray-500 duration-150">Registration</li>
          </Link>
          <Link href={"translation"}>
            <li className="hover:text-gray-500 duration-150">Translations</li>
          </Link>
          <Link href={"download"}>
            <li className="hover:text-gray-500 duration-150">Download</li>
          </Link>
          <Link href={"pattern"}>
            <li className="hover:text-gray-500 duration-150">Pattern</li>
          </Link>
          <Link href={"nas"}>
            <li className="hover:text-gray-500 duration-150">The Nas</li>
          </Link>
          <Link href={"contact"}>
            <li className="hover:text-gray-500 duration-150">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="px-[6%] flex z-10 lg:hidden items-center justify-between shadow-md">
        <Link href="home">
          <Image src={logo} alt="logo" className="h-24 w-auto" />
        </Link>
        <button onClick={() => setOpen(!open)}>
          <CiMenuFries className="w-8 h-auto duration-75 hover:text-blue-600 hover:scale-[110%] hover:rotate-12 hover:text-bold" />
        </button>
      </div>

      <aside
        className={`fixed top-0 right-0 mx-auto my-auto duration-500 h-full w-full bg-blue-500 text-white p-3 z-20 ${
          open === true ? "translate-y-0" : "translate-y-[-800px]"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-8 right-5 md:right-8 w-8 h-auto duration-150 hover:text-red-500 hover:scale-[110%] hover:rotate-90 hover:text-bold"
        >
          <RxCross2 className="h-8 w-auto" />
        </button>
        <ul className="flex flex-col cursor-pointer items-center h-full justify-center gap-6 font-bold ">
          <Link href={"home"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              Home
            </li>
          </Link>
          <Link href={"insurance"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              insurance
            </li>
          </Link>
          <Link href={"registration"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              Registration
            </li>
          </Link>
          <Link href={"translation"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              Translations
            </li>
          </Link>
          <Link href={"download"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              Download
            </li>
          </Link>
          <Link href={"pattern"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              Pattern
            </li>
          </Link>
          <Link href={"nas"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              The Nas
            </li>
          </Link>
          <Link href={"contact"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              Contact
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Header;
