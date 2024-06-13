"use client";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

export default function App() {
  const { language } = useLanguage();

  const handleDownloadClick = (pdfFileName) => {
    const pdfPath = `/PDFs/${pdfFileName}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="py-12 px-[5%] lg:px-[10%] bg-[#ecfafa]">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-[#14a8e9] pb-12">
        {language === "pl" ? "Przydatne dokumenty" : "Завантаження"}
      </h1>
      <div>
        <ul>
          <li
            onClick={() => handleDownloadClick("1.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? "Umowa polsko - angielska"
                  : "Польсько-англійська угода"}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("2.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? "Umowa polsko-niemiecka"
                  : "Польсько-німецька угода"}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("3.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? "Umowa polsko-włoska"
                  : "Польсько-італійська угода"}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("4.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Umowa
                polsko-holenderska`
                  : `Польсько-голландська угода`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("5.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl" ? `Umowa darowizny` : `Угода про дарунок`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("6.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Umowa
                kupna-sprzedaży`
                  : `Декларація PCC-3`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("7.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Deklaracja PCC-3`
                  : `Заява під кримінальною відповідальністю`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("8.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Deklaracja AKC-US`
                  : `Угода про купівлю-продаж`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("9.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Oświadczenie pod
                odpowiedzialnością karną`
                  : `Декларація AKC-US`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("10.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Zgłoszenie zbycia pow. Nowotarski`
                  : `Повідомлення про передачу пав. Новотарський`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("11.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Zgłoszenie zbycia pow. Tatrzański`
                  : `Повідомлення про передачу пав. Татрзянський`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("12.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>{language === "pl" ? `Zgody RODO` : `Згоди GDPR`}</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("13.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Pełnomocnictwo i
                Oświadczenie`
                  : `Довіреність та Заява`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("14.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>
                {language === "pl"
                  ? `Oświadczenie sprawcy kolizji`
                  : `Заява винуватця ДТП`}
              </p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                {language === "pl" ? "pobierać" : "завантажити"}
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
