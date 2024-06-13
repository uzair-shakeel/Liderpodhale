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
                    <p>Jana Kilińskiego 15</p>
                    <Input
                      type="text"
                      placeholder=" 34-400 Nowy Targ"
                      size="lg"
                      color="primary"
                      className=" py-2"
                      startContent={
                        <FaLocationCrosshairs className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <p>Zadzwoń do nas</p>
                    <Input
                      type="number"
                      placeholder="+48 662 969 662"
                      size="lg"
                      color="primary"
                      className=" py-2"
                      startContent={
                        <FaPhoneAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0 py-[3px]" />
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <p>Pon - Pt, 8:00-17:00</p>
                    <p>E-mail </p>
                    <p>dział rejestracji i tłumaczeń</p>
                    <Input
                      type="email"
                      placeholder=" nowytarg@liderpodhale.pl"
                      size="lg"
                      color="primary"
                      className=" py-2"
                      startContent={
                        <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                    />
                    <p>dział ubezpieczeń</p>
                    <Input
                      type="email"
                      placeholder="ubezpieczenia@liderpodhale.pl"
                      size="lg"
                      color="primary"
                      className=" py-2"
                      startContent={
                        <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                    />
                  </div>
                </div>
              </Tab>
              <Tab key="music" title="Białka Tatrzańska">
                <div>
                  <div className="mb-4">
                    <p>Środkowa 162</p>
                    <Input
                      type="text"
                      placeholder="  34-405 Białka Tatrzańska"
                      size="lg"
                      color="primary"
                      className=" py-2"
                      startContent={
                        <FaLocationCrosshairs className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <p>Zadzwoń do naszego innego biura</p>
                    <Input
                      type="number"
                      placeholder="+48 887 770 774"
                      size="lg"
                      color="primary"
                      className=" py-2"
                      startContent={
                        <FaPhoneAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0 py-[3px]" />
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <p>Pon - Pt, 9:00-16:00</p>
                    <p>E-mail </p>
                    <Input
                      type="email"
                      placeholder=" nowytarg@liderpodhale.pl"
                      size="lg"
                      color="primary"
                      className=" py-2"
                      startContent={
                        <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                      }
                    />
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
