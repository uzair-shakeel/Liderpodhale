import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { language } = useLanguage() || {};
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl text-center md:text-start py-3 text-[#162a5d]">
        {language === "pl"
          ? "Najczęściej zadawane pytania"
          : "Найчастіше задавані питання"}
      </h1>
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="1"
          title={`${
            language === "pl"
              ? `Jakie języki tłumaczymy?`
              : `Які мови ми перекладаємо?`
          }`}
        >
          {language === "pl"
            ? `Angielski, Niemiecki, Włoski, Francuski, Holenderski, Szwedzki,
          Słowacki, Ukraiński, Hiszpański, Duński, Norweski, Słoweński,
          Węgierski, Czeski, Litewski, Rumuński, Łotewski, Grecki, Portugalski,
          Bułgarski, Fiński.`
            : `Англійська, Німецька, Італійська, Французька, Голландська, Шведська, Словацька, Українська, Іспанська, Данська, Норвезька, Словенська, Угорська, Чеська, Литовська, Румунська, Латвійська, Грецька, Португальська, Болгарська, Фінська.

`}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="2"
          title={`${
            language === "pl"
              ? `Jak długo trwa tłumaczenie?`
              : `Скільки триває переклад?`
          }`}
        >
          {language === "pl"
            ? `Nasze tłumaczenia wykonujemy średnio od dwóch do trzech dni roboczych.`
            : `Наші переклади виконуємо в середньому від двох до трьох робочих днів.`}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="3"
          title={`${
            language === "pl"
              ? `ile kosztuje tłumaczenie?`
              : `Скільки коштує переклад?`
          }`}
        >
          {language === "pl"
            ? `Koszt tłumaczenia za stronę zaczyna się od 50zł i jest zależny od
          ilości znaków na stronie oraz stopnia trudności.`
            : `Вартість перекладу за сторінку починається від 50 злотих і залежить від кількості символів на сторінці та ступеня складності.

`}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
