"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Up from "../../public/chevron-up-solid.svg";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage() || {};
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" bg-gray-200 py-8 px-[6%]">
      <div className="flex items-center justify-center flex-col  ">
        <button
          className="p-3 rounded-full shadow-md hover:shadow-lg animate-bounce bg-white"
          onClick={scrollToTop}
        >
          <Image src={Up} alt="up" className="h-4 w-4 lg:h-8 lg:w-8" />
        </button>
        <p>{language === "pl" ? "Wróć na górę" : "Догори"}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-8">
        <div className="text-center font-semibold flex flex-col items-center ">
          <Link href="home">
            <Image src={logo} alt="logo" className="h-24 lg:h-[170px] w-auto" />
          </Link>
          <h2 className="text-[#14a8e9]">Liderpodhale PL</h2>
        </div>

        <div className="flex justify-center py-4 md:py-auto gap-[30%] md:w-[40%]">
          <ul className="space-y-3 py-4">
            <li className="font-semibold ">
              {language === "pl" ? "Sekcje" : "Розділи"}
            </li>

            <li className=" cursor-pointer">
              <Link href="insurance">
                {language === "pl" ? "Ubezpieczenia" : "Страхування"}
              </Link>
            </li>
            <li className=" cursor-pointer">
              <Link href="registration">
                {language === "pl" ? "Rejestracja" : "Реєстрація"}
              </Link>
            </li>
            <li className=" cursor-pointer">
              <Link href="translation">
                {language === "pl" ? "Tłumaczenia" : "Переклад"}
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="download">
                {language === "pl" ? "Pobierz" : "Завантаження"}
              </Link>
            </li>
            <li className=" cursor-pointer">
              <Link href="pattern">
                {language === "pl" ? "Wzory" : "Зразки"}
              </Link>
            </li>
          </ul>
          <ul className="space-y-3 py-4">
            <li className="font-semibold">
              {language === "pl" ? "O nas" : "Про нас"}
            </li>

            <li className=" cursor-pointer">
              <Link href="nas">{language === "pl" ? "O nas" : "Про нас"}</Link>
            </li>
            <li className=" cursor-pointer">
              <Link href="contact">
                {language === "pl" ? " Kontakt" : "Контакт"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center text-gray-600">
        {language === "pl"
          ? "© 2024 Wszelkie prawa zastrzeżone."
          : "© 2024 Всі права захищені."}
      </p>
    </div>
  );
};

export default Footer;
