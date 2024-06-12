import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-[6%]   flex items-center justify-between shadow-md">
      <Image src={logo} alt="logo" className="h-24 w-auto" />
      <ul className="flex cursor-pointer  gap-6 font-bold ">
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
          <li className="hover:text-gray-500 duration-150">Downlaod</li>
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
  );
};

export default Header;
