"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useLanguage } from "@/context/LanguageContext";

import { Avatar, AvatarGroup } from "@nextui-org/react";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="px-[3%] hidden  lg:flex items-center justify-between shadow-md">
        <Link href="home">
          <Image src={logo} alt="logo" className="h-24 w-auto" />
        </Link>
        <ul className="hidden lg:flex items-center cursor-pointer  gap-6 font-bold ">
          <Link href={"home"}>
            <li className="hover:text-gray-500 duration-150">
              {language === "pl" ? "Strona główna" : "Головна"}
            </li>
          </Link>
          <Link href={"insurance"}>
            <li className="hover:text-gray-500 duration-150">
              {language === "pl" ? "Ubezpieczenia" : "Страхування"}
            </li>
          </Link>
          <Link href={"registration"}>
            <li className="hover:text-gray-500 duration-150">
              {language === "pl" ? "Rejestracja" : "Реєстрація"}
            </li>
          </Link>
          <Link href={"translation"}>
            <li className="hover:text-gray-500 duration-150">
              {language === "pl" ? "Tłumaczenia" : "Переклад"}
            </li>
          </Link>
          <Link href={"download"}>
            <li className="hover:text-gray-500 duration-150">
              {language === "pl" ? "Pobierz" : "Завантаження"}
            </li>
          </Link>
          <Link href={"pattern"}>
            <li className="hover:text-gray-500 duration-150">
              {language === "pl" ? "Wzory" : "Зразки"}
            </li>
          </Link>
          <Link href={"nas"}>
            <li className="hover:text-gray-500 duration-150">
              {language === "pl" ? "O nas" : "Про нас"}
            </li>
          </Link>
          <Link href={"contact"}>
            <li className="hover:text-gray-500 duration-150">
              {language === "pl" ? " Kontakt" : "Контакт"}
            </li>
          </Link>
          <AvatarGroup isBordered className="flex gap-1">
            <Avatar
              onClick={() => setLanguage("pl")}
              src="https://cdn.britannica.com/52/3552-004-83ABA964/Flag-Poland.jpg"
            />
            <Avatar
              onClick={() => setLanguage("uk")}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png"
            />
          </AvatarGroup>
        </ul>
      </div>
      <div className="px-[6%] flex z-10 lg:hidden items-center justify-between shadow-md">
        <Link href="home">
          <Image src={logo} alt="logo" className="h-24 w-auto" />
        </Link>
        <div className="flex gap-4">
          <AvatarGroup isBordered className="flex gap-7">
            <Avatar
              onClick={() => setLanguage("pl")}
              src="https://cdn.britannica.com/52/3552-004-83ABA964/Flag-Poland.jpg"
            />
            <Avatar
              onClick={() => setLanguage("uk")}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png"
            />
          </AvatarGroup>
          <button onClick={() => setOpen(!open)}>
            <CiMenuFries className="w-8 h-auto duration-75 hover:text-blue-600 hover:scale-[110%] hover:rotate-12 hover:text-bold" />
          </button>
        </div>
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
              {language === "pl" ? "Strona główna" : "Головна"}
            </li>
          </Link>
          <Link href={"insurance"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              {language === "pl" ? "Ubezpieczenia" : "Страхування"}
            </li>
          </Link>
          <Link href={"registration"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              {language === "pl" ? "Rejestracja" : "Реєстрація"}
            </li>
          </Link>
          <Link href={"translation"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              {language === "pl" ? "Tłumaczenia" : "Переклад"}
            </li>
          </Link>
          <Link href={"download"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              {language === "pl" ? "Pobierz" : "Завантаження"}
            </li>
          </Link>
          <Link href={"pattern"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              {language === "pl" ? "Wzory" : "Зразки"}
            </li>
          </Link>
          <Link href={"nas"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              {language === "pl" ? "O nas" : "Про нас"}
            </li>
          </Link>
          <Link href={"contact"}>
            <li
              onClick={() => setOpen(false)}
              className="hover:text-gray-500 duration-150"
            >
              {language === "pl" ? " Kontakt" : "Контакт"}
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Header;
