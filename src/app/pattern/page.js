"use client";
import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Austria1 from "../../../public/Austria1.jpg";
import Austria2 from "../../../public/Austria2.jpg";
import Austria3 from "../../../public/Austria3.jpg";
import Austria4 from "../../../public/Austria4.jpg";
import Belgia1 from "../../../public/Belgia1.jpg";
import Belgia2 from "../../../public/Belgia2.jpg";
import Belgia3 from "../../../public/Belgia3.jpg";
import Belgia4 from "../../../public/Belgia4.jpg";
import Dania1 from "../../../public/Dania1.jpeg";
import Dania2 from "../../../public/Dania2.jpeg";
import Dania3 from "../../../public/Dania3.jpeg";
import Dania4 from "../../../public/Dania4.jpg";
import Francja1 from "../../../public/Francja1.jpg";
import Francja2 from "../../../public/Francja2.jpg";
import Francja3 from "../../../public/Francja3.jpg";
import Francja4 from "../../../public/Francja4.jpg";
import Niemcy1 from "../../../public/Niemcy1.jpg";
import Niemcy2 from "../../../public/Niemcy2.jpg";
import Niemcy3 from "../../../public/Niemcy3.jpg";

const Austria = [Austria1, Austria2, Austria3, Austria4];
const Belgia = [Belgia1, Belgia2, Belgia3, Belgia4];
const Dania = [Dania1, Dania2, Dania3, Dania4];
const Francja = [Francja1, Francja2, Francja3, Francja4];
const Niemcy = [Niemcy1, Niemcy2, Niemcy3];

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(Austria[0]);
  const [selectedBelgia, setSelectedBelgia] = useState(Belgia[0]);
  const [selectedDania, setSelectedDania] = useState(Dania[0]);
  const [selectedFrancja, setSelectedFrancja] = useState(Francja[0]);
  const [selectedNiemcy, setSelectedNiemcy] = useState(Niemcy[0]);

  return (
    <div className="py-12 px-[10%] space-y-12 bg-[#ecfafa]">
      <Card>
        <CardBody>
          <h1 className="font-semibold text-3xl ">Austria</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Austria.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Austria ${index + 1}`}
                    className="h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-[500px]">
              <Image
                src={selectedImage}
                alt="Selected Austria"
                className="w-full h-full object-cover"
                layout="responsive"
                width={"100%"}
                height={500}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h1 className="font-semibold text-3xl ">Belgia</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Belgia.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedBelgia(image)}
                >
                  <Image
                    src={image}
                    alt={`Austria ${index + 1}`}
                    className="h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-[500px]">
              <Image
                src={selectedBelgia}
                alt="Selected Austria"
                className="w-full h-full object-cover"
                layout="responsive"
                width={"100%"}
                height={500}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h1 className="font-semibold text-3xl ">Dania</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Dania.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedDania(image)}
                >
                  <Image
                    src={image}
                    alt={`Austria ${index + 1}`}
                    className="h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-[500px]">
              <Image
                src={selectedDania}
                alt="Selected Austria"
                className="w-full h-full object-cover"
                layout="responsive"
                width={"100%"}
                height={500}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h1 className="font-semibold text-3xl ">Francja</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Francja.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedFrancja(image)}
                >
                  <Image
                    src={image}
                    alt={`Austria ${index + 1}`}
                    className="h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-[500px]">
              <Image
                src={selectedFrancja}
                alt="Selected Austria"
                className="w-full h-full object-cover"
                layout="responsive"
                width={"100%"}
                height={500}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h1 className="font-semibold text-3xl ">Niemcy</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Niemcy.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedNiemcy(image)}
                >
                  <Image
                    src={image}
                    alt={`Austria ${index + 1}`}
                    className="h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-[500px]">
              <Image
                src={selectedNiemcy}
                alt="Selected Austria"
                className="w-full h-full object-cover"
                layout="responsive"
                width={"100%"}
                height={500}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Page;
