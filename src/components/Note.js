import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const Note = () => {
  const { language } = useLanguage() || {};
  return (
    <section className="px-[6%] py-4  bg-gray-300">
      <h6 className="text-tiny md:text-sm fotn-bold">
        {language === "pl" ? "Materiał marketingowy" : "Маркетингові матеріали"}
      </h6>

      <p className="text-[9px] md:text-tiny py-3">
        {language === "pl"
          ? `* Składka za pakiet OC i AC z Assistance Złoty+ wysokości 764 zł rocznie
        została wyliczona dla Klienta w wieku 39 lat, mieszkańca Węgrzc, powiat
        krakowski, właściciela Hondy Jazz.`
          : `* Премія за пакет OC та AC з Assistance Gold+ у розмірі 764 злотих на рік
        був розрахований на Замовника віком 39 років, мешканця м. Венгржце, район
        Краків, власник Honda Jazz.`}
      </p>
      <p className="text-[9px] md:text-tiny">
        {language === "pl"
          ? `* Składka za pakiet OC i AC z Assistance Standard w wysokości 676 zł
        rocznie została wyliczona dla Klienta w wieku 33 lat, mieszkańca
        Bobrowników, posiadacza Forda Focusa.`
          : `* Преміум за пакет OC та AC з Assistance Standard у розмірі 676 злотих
        на рік розраховано для Замовника віком 33 роки, який є резидентом
        Бобронікі, власник Ford Focus.`}
      </p>
      <p className="text-[9px] md:text-tiny py-3">
        {language === "pl"
          ? `* Składka OC z Assistance Standard w wysokości 375 zł rocznie została
        wyliczona dla Klienta w wieku 51 lat, mieszkańca Rybarzowic, powiat
        bielski, właściciela Toyoty Auris.`
          : `* Страхова премія за страхування відповідальності перед третіми особами з Assistance Standard у розмірі 375 злотих на рік становила
        розрахований на Замовника віком 51 рік, мешканець с. Рибазовіце, р-н
        Бєльський, власник Toyota Auris.`}
      </p>
    </section>
  );
};

export default Note;
