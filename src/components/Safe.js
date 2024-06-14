import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Safe = () => {
  const { language } = useLanguage() || {};
  return (
    <div className="px-[5%] lg:px-[10%] py-6 lg:py-14">
      <h1 className="pb-10 text-center md:text-start font-bold text-2xl text-[#162a5d]">
        {language === "pl"
          ? "Zakup ubezpieczenia online jest bezpieczny i pewny"
          : "Купівля страховки онлайн – це безпечно та надійно"}
      </h1>
      <div className="grid  lg:grid-cols-3 gap-6">
        <div className="py-6 px-12 relative bg-white shadow-sm border-white border-2">
          <div className="absolute top-[-30px] left-5 text-white  rounded-full p-4 bg-gradient-to-r from-purple-400  via-blue-500 to-blue-900 border-8 border-[#ecfafa]">
            <FaCheck size={22} />
          </div>
          <h3 className="font-semibold text-xl pt-6">
            {language === "pl"
              ? "ZakupTwoje dane są bezpieczne"
              : "Ваші дані в безпеці"}
          </h3>
          <p className="text-md text-gray-700 pt-3">
            {language === "pl"
              ? "Dane, które podajesz, posłużą nam wyłącznie do obsługi Twojego zapytania."
              : `Дані, які ви надаєте, будуть використовуватися нами лише для роботи з вашими
            Запит.`}
          </p>
        </div>
        <div className="py-6 px-12 relative bg-white shadow-sm border-white border-2">
          <div className="absolute top-[-30px] left-5 text-white  rounded-full p-4 bg-gradient-to-r from-purple-400  via-blue-500 to-blue-900 border-8 border-[#ecfafa]">
            <FaCheck size={22} />
          </div>
          <h3 className="font-semibold text-xl pt-6">
            {language === "pl"
              ? `Twoje płatności są bezpieczne`
              : `Ваші платежі в безпеці`}
          </h3>
          <p className="text-md text-gray-700 pt-3">
            {language === "pl"
              ? `Płatności online są obsługiwane przez system Przelewy24.`
              : `Онлайн-платежі обробляються системою Przelewy24.`}
          </p>
        </div>
        <div className="py-6 px-12 relative bg-white shadow-sm border-white border-2">
          <div className="absolute top-[-30px] left-5 text-white  rounded-full p-4 bg-gradient-to-r from-purple-400  via-blue-500 to-blue-900 border-8 border-[#ecfafa]">
            <FaCheck size={22} />
          </div>
          <h3 className="font-semibold text-xl pt-6">
            {language === "pl"
              ? `Taka sama jakość online i u Agenta`
              : `Однакова якість в Інтернеті та у Агента`}
          </h3>
          <p className="text-md text-gray-700 pt-3">
            {language === "pl"
              ? `Niezależnie gdzie kupisz, otrzymasz tę samą obsługę po szkodzie.`
              : `Незалежно від того, де ви купуєте, ви отримаєте однакову послугу після пошкодження.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safe;
