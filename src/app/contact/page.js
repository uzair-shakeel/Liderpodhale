"use client";
import React from "react";
import {
  Button,
  ButtonGroup,
  Input,
  Card,
  CardBody,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/context/LanguageContext";

const page = () => {
  const { language } = useLanguage() || {};
  return (
    <div className="py-12 px-[5%] lg:px-[10%] bg-[#ecfafa]">
      <h1 className="text-2xl md:text-3xl text-center text-[#14a8e9] font-bold pb-4 md:pb-8">
        {language === "pl"
          ? `SKONTAKTUJ SIĘ Z
        NAMI`
          : `ЗВ'ЯЖІТЬСЯ З НАМИ
`}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:pr-[12%] text-center lg:text-start">
          <h2>
            {" "}
            {language === "pl"
              ? `Porozmawiajmy o wszystkim razem`
              : `Давайте
обговоримо все
разом`}
          </h2>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" className="py-4">
              <Tab key="photos" title="Nowy Targ">
                <div>
                  <div className="mb-4">
                    <p> {language === "pl" ? `Adres` : `Адреса`}</p>
                    <Button
                      className="bg-blue-100 text-[#14a8e9] w-full items-start py-2"
                      startContent={
                        <FaLocationCrosshairs className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps?q=49.47800, 20.02460",
                          "_blank"
                        )
                      }
                    >
                      {language === "pl"
                        ? `Jana Kilińskiego
                      15, 34-400 Nowy Targ`
                        : `Ян Кілінський
                      15, 34-400 Новий Тарг`}
                    </Button>
                  </div>
                  <div className="mb-4">
                    <p>
                      {language === "pl" ? `Zadzwoń do nas` : `дзвоніть нам`}
                    </p>
                    <Button
                      className="bg-blue-100 w-full text-[#14a8e9] py-2"
                      startContent={
                        <FaPhoneAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0 py-[3px]" />
                      }
                      onClick={() => window.open("tel:+48662969662", "_self")}
                    >
                      +48 662 969 662
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p>Pon - Pt, 8:00-17:00</p>
                    <p>
                      {language === "pl"
                        ? `E-mail`
                        : `адреса електронної пошти`}
                    </p>
                    <p>
                      {" "}
                      {language === "pl"
                        ? `dział rejestracji i tłumaczeń`
                        : `відділ реєстрації та перекладу`}
                    </p>
                    <Button
                      className="bg-blue-100 w-full text-[#14a8e9] py-2"
                      startContent={
                        <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                      onClick={() =>
                        window.open("mailto:nowytarg@liderpodhale.pl", "_blank")
                      }
                    >
                      nowytarg@liderpodhale.pl
                    </Button>
                    <p>
                      {" "}
                      {language === "pl"
                        ? `dział ubezpieczeń`
                        : `відділ страхування`}
                    </p>

                    <Button
                      className="bg-blue-100 w-full text-[#14a8e9] py-2 "
                      startContent={
                        <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                      onClick={() =>
                        window.open(
                          "mailto:ubezpieczenia@liderpodhale.pl",
                          "_blank"
                        )
                      }
                    >
                      ubezpieczenia@liderpodhale.pl
                    </Button>
                  </div>
                </div>
              </Tab>
              <Tab key="music" title="Białka Tatrzańska">
                <div>
                  <div className="mb-4">
                    <p>{language === "pl" ? `Adres` : `Адреса`}</p>

                    <Button
                      className="bg-blue-100 w-full text-[#14a8e9] items-start py-2"
                      startContent={
                        <FaLocationCrosshairs className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps?q=49.38610,20.10620",
                          "_blank"
                        )
                      }
                    >
                      {language === "pl"
                        ? `Środkowa 162, 34-405 Białka Tatrzańska`
                        : `відділ страхування`}
                    </Button>
                  </div>
                  <div className="mb-4">
                    <p>
                      {language === "pl"
                        ? `Zadzwoń do naszego innego biura`
                        : `дзвоніть нам`}
                    </p>
                    <Button
                      className="bg-blue-100 w-full text-[#14a8e9] py-2"
                      startContent={
                        <FaPhoneAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0 py-[3px]" />
                      }
                      onClick={() => window.open("tel:+48887770774", "_self")}
                    >
                      +48 887 770 774
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p>Pon - Pt, 9:00-16:00</p>
                    <p>
                      {language === "pl"
                        ? `E-mail`
                        : `адреса електронної пошти`}
                    </p>
                    <Button
                      className="bg-blue-100 w-full text-[#14a8e9] py-2"
                      startContent={
                        <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                      onClick={() =>
                        window.open("mailto:nowytarg@liderpodhale.pl", "_blank")
                      }
                    >
                      nowytarg@liderpodhale.pl
                    </Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="lg:px-[8%] text-center lg:text-start">
          <p>{language === "pl" ? `Interesuję się...` : `Мене цікавить...`}</p>
          <div className="flex flex-wrap gap-4 py-8 ">
            <Button>
              {language === "pl"
                ? `Rejestracja samochodu`
                : `Реєстрація автомобіля`}
            </Button>
            <Button>
              {language === "pl" ? `Ubezpieczenie` : `Страхування`}
            </Button>
            <Button>{language === "pl" ? `Tłumaczenie` : `Переклад`}</Button>
            <Button>{language === "pl" ? `Problem` : `Питання`}</Button>
            <Button>{language === "pl" ? `Inne` : `Інше`}</Button>
          </div>
          <div className="space-y-6">
            <Input
              type="text"
              label={language === "pl" ? "Imię" : "Ім'я"}
              color="primary"
            />
            <Input
              type="text"
              label={language === "pl" ? "Nazwisko" : "Прізвище"}
              color="primary"
            />
            <Input
              type="email"
              label={
                language === "pl" ? "Adres email" : "Адреса електронної пошти"
              }
              color="primary"
            />
            <Input
              type="number"
              label={language === "pl" ? "Numer telefonu" : "Номер телефону"}
              color="primary"
            />
            <Input
              type="text"
              label={
                language === "pl" ? "Twoja wiadomość" : "Ваше повідомлення"
              }
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
