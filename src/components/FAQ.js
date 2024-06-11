import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl py-3 text-[#162a5d]">
        Najczęściej zadawane pytania
      </h1>
      <Accordion selectionMode="multiple">
        <AccordionItem key="1" aria-label="1" title=" Jakie języki tłumaczymy?">
          Angielski, Niemiecki, Włoski, Francuski, Holenderski, Szwedzki,
          Słowacki, Ukraiński, Hiszpański, Duński, Norweski, Słoweński,
          Węgierski, Czeski, Litewski, Rumuński, Łotewski, Grecki, Portugalski,
          Bułgarski, Fiński.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="2"
          title=" Jak długo trwa tłumaczenie ?"
        >
          Nasze tłumaczenia wykonujemy średnio od dwóch do trzech dni roboczych.
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="3"
          title=" ile kosztuje tłumaczenie?"
        >
          Koszt tłumaczenia za stronę zaczyna się od 50zł i jest zależny od
          ilości znaków na stronie oraz stopnia trudności.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
