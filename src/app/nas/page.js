"use client";
import React, { useState } from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { useLanguage } from "../../context/LanguageContext";

export default function App() {
  const { language } = useLanguage() || {};

  return (
    <div className="py-12 px-[5%] lg:px-[10%] bg-[#ecfafa]">
      <Card
        isBlurred
        className="px-2 md:px-3 lg:px-4 border-none bg-background/60 dark:bg-default-100/50 max-w-screen"
        shadow="sm"
      >
        <CardBody>
          <div className="grid text-center lg:text-start grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={"100%"}
                shadow="md"
                src="https://luxury-bunny-b94631.netlify.app/assets/Liderphoto2.jpg"
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8 ml-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h1 className="text-large font-semibold mt-2">
                    {language === "pl"
                      ? "GRZEGORZ WARCIAK"
                      : "GRZEGORZ WARCIAK"}
                  </h1>
                  <p className="text-small text-foreground/80 pb-8 mt-2">
                    {language === "pl"
                      ? "Założyciel firmy Liderpodhale"
                      : "Засновник компанії Лідерподгалля"}
                  </p>
                  <h3 className="text-foreground/90 text-justify text-sm md:text-md	">
                    {language === "pl"
                      ? `Cześć! Nazywam się Grzegorz Warciak i jestem dumnym
                    właścicielem Multiagencji Lider. Moja przygoda z
                    ubezpieczeniami, rejestracją aut i tłumaczeniami rozpoczęła
                    się w 2006 roku, kiedy postanowiłem, że chcę przynieść
                    mieszkańcom Podhala usługi najwyższej jakości w tych
                    dziedzinach. Założyłem Lider z jednym celem: uczynić życie
                    moich klientów prostszym i bardziej bezpiecznym. Od samego
                    początku byłem zdeterminowany, by nie tylko oferować
                    standardowe usługi, ale też dostosowywać je do
                    indywidualnych potrzeb każdej osoby, która odwiedza nasze
                    biuro. Moje pasje, takie jak jazda na motocyklu, cross czy
                    wędrówki po górach, nauczyły mnie, jak ważne jest poczucie
                    bezpieczeństwa i pewności siebie. Te doświadczenia
                    przekładają się na to, jak prowadzę Multiagencję Lider - z
                    zaangażowaniem, determinacją i dbałością o każdy, nawet
                    najdrobniejszy szczegół. Zapraszam do współpracy. Razem
                    znajdziemy rozwiązanie idealnie dostosowane do Twoich
                    potrzeb!`
                      : `Привіт! Мене звати Гжегож Варцяк, і я гордий власник Multiagencji Lider. Моя подорож у сфері страхування, реєстрації автомобілів та перекладів розпочалася у 2006 році, коли я вирішив, що хочу надавати мешканцям Подгалля послуги найвищої якості у цих галузях. Я заснував Lider з однією метою: зробити життя моїх клієнтів простішим і безпечнішим. З самого початку я був визначений не лише надавати стандартні послуги, але й пристосовувати їх до індивідуальних потреб кожної людини, яка завітала до нашого офісу. Мої захоплення, такі як мотоциклізм, крос та походи в гори, навчили мене, наскільки важливими є почуття безпеки і впевненості. Ці досвіди відображаються у тому, як я веду Multiagencję Lider - з захопленням, рішучістю і увагою до кожної, навіть найдрібнішої деталі. Запрошую до співпраці. Разом знайдемо рішення, ідеально пристосоване до ваших потреб!`}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
