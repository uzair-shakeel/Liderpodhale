import React from "react";
import { FaCheck } from "react-icons/fa";

const Safe = () => {
  return (
    <div className="px-[5%] lg:px-[10%] py-6 lg:py-14">
      <h1 className="pb-10 text-center md:text-start font-bold text-2xl text-[#162a5d]">
        Zakup ubezpieczenia online jest bezpieczny i pewny
      </h1>
      <div className="grid  lg:grid-cols-3 gap-6">
        <div className="py-6 px-12 relative bg-white shadow-sm border-white border-2">
          <div className="absolute top-[-30px] left-5 text-white  rounded-full p-4 bg-gradient-to-r from-purple-400  via-blue-500 to-blue-900 border-8 border-[#ecfafa]">
            <FaCheck size={22} />
          </div>
          <h3 className="font-semibold text-xl pt-6">
            Twoje dane są bezpieczne
          </h3>
          <p className="text-md text-gray-700 pt-3">
            Dane, które podajesz, posłużą nam wyłącznie do obsługi Twojego
            zapytania.
          </p>
        </div>
        <div className="py-6 px-12 relative bg-white shadow-sm border-white border-2">
          <div className="absolute top-[-30px] left-5 text-white  rounded-full p-4 bg-gradient-to-r from-purple-400  via-blue-500 to-blue-900 border-8 border-[#ecfafa]">
            <FaCheck size={22} />
          </div>
          <h3 className="font-semibold text-xl pt-6">
            Twoje płatności są bezpieczne
          </h3>
          <p className="text-md text-gray-700 pt-3">
            Płatności online są obsługiwane przez system Przelewy24.
          </p>
        </div>
        <div className="py-6 px-12 relative bg-white shadow-sm border-white border-2">
          <div className="absolute top-[-30px] left-5 text-white  rounded-full p-4 bg-gradient-to-r from-purple-400  via-blue-500 to-blue-900 border-8 border-[#ecfafa]">
            <FaCheck size={22} />
          </div>
          <h3 className="font-semibold text-xl pt-6">
            Taka sama jakość online i u Agenta
          </h3>
          <p className="text-md text-gray-700 pt-3">
            Niezależnie gdzie kupisz, otrzymasz tę samą obsługę po szkodzie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safe;
