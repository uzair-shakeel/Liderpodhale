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

const page = () => {
  return (
    <div className="py-12 px-[5%] lg:px-[10%] bg-[#ecfafa]">
      <h1 className="text-2xl md:text-3xl text-center text-[#14a8e9] font-bold pb-4 md:pb-8">
        SKONTAKTUJ SIĘ Z NAMI
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:pr-[12%] text-center lg:text-start">
          <h2>Porozmawiajmy o wszystkim razem</h2>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" className="py-4">
              <Tab key="photos" title="Nowy Targ">
                <div>
                  <div className="mb-4">
                    <p>Adres</p>
                    <Button
                      className="bg-blue-100 text-[#14a8e9] w-full items-start py-2"
                      startContent={
                        <FaLocationCrosshairs className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps?q=34-400+Nowy+Targ",
                          "_blank"
                        )
                      }
                    >
                      Jana Kilińskiego 15, 34-400 Nowy Targ
                    </Button>
                  </div>
                  <div className="mb-4">
                    <p>Zadzwoń do nas</p>
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
                    <p>E-mail </p>
                    <p>dział rejestracji i tłumaczeń</p>
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
                    <p>dział ubezpieczeń</p>
                    <Button
                      className="bg-blue-100 w-full text-[#14a8e9] py-2 text-blue-600"
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
                    <p>Adres</p>
                    <Button
                      className="bg-blue-100 w-full text-[#14a8e9] items-start py-2"
                      startContent={
                        <FaLocationCrosshairs className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps?q=34-400+Nowy+Targ",
                          "_blank"
                        )
                      }
                    >
                      JanaŚrodkowa 162, 34-405 Białka Tatrzańska
                    </Button>
                  </div>
                  <div className="mb-4">
                    <p>Zadzwoń do naszego innego biura</p>
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
                    <p>E-mail </p>
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
          <p>Interesuję się...</p>
          <div className="flex flex-wrap gap-4 py-8 ">
            <Button>Rejestracja samochodu</Button>
            <Button>Ubezpieczenie</Button>
            <Button>Tłumaczenie</Button>
            <Button>Problem</Button>
            <Button>Inne</Button>
          </div>
          <div className="space-y-6">
            <Input type="text" label="Imię" color="primary" />
            <Input type="text" label="Nazwisko" color="primary" />
            <Input type="email" label="Adres email" color="primary" />
            <Input type="number" label="Numer telefonu" color="primary" />
            <Input type="text" label="Twoja wiadomość" color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
