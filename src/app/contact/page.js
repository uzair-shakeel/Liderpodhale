import React from "react";

import { Button, ButtonGroup, Input } from "@nextui-org/react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <div className="py-12 px-[10%] bg-[#ecfafa]">
      <div className="grid grid-cols-2 gap-12">
        <div className="pr-[12%]">
          <h2>Porozmawiajmy o wszystkim razem</h2>
          <ButtonGroup className="py-6">
            <Button className="bg-[#14a8e9]">Nowy Targ</Button>
            <Button variant="bordered" className="border-[#14a8e9]">
              Białka Tatrzańska
            </Button>
          </ButtonGroup>
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
        <div>Biiii</div>
      </div>
    </div>
  );
};

export default page;
