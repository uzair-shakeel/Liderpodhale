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
import Wielka1 from "../../../public/Wielka Brytania1.jpg";
import Grecja1 from "../../../public/Grecja1.jpg";
import Grecja2 from "../../../public/Grecja2.jpg";
import Grecja3 from "../../../public/Grecja3.jpg";
import Grecja4 from "../../../public/Grecja4.jpg";
import Irlandia1 from "../../../public/Irlandia1.jpg";
import Irlandia2 from "../../../public/Irlandia2.jpg";
import Włochy1 from "../../../public/Włochy1.jpg";
import Włochy2 from "../../../public/Włochy2.jpg";
import Holandia1 from "../../../public/Holandia1.jpeg";
import Holandia2 from "../../../public/Holandia2.jpeg";
import Holandia3 from "../../../public/Holandia3.jpeg";
import Holandia4 from "../../../public/Holandia4.jpg";
import Norwegia1 from "../../../public/Norwegia1.jpg";
import Norwegia2 from "../../../public/Norwegia2.jpg";
import Norwegia3 from "../../../public/Norwegia3.jpg";
import Norwegia4 from "../../../public/Norwegia4.jpg";
import Hiszpania1 from "../../../public/Hiszpania1.jpg";
import Hiszpania2 from "../../../public/Hiszpania2.jpg";
import Szwajcaria1 from "../../../public/Szwajcaria1.jpg";
import Szwajcaria2 from "../../../public/Szwajcaria2.jpg";
import Stany1 from "../../../public/Stany Zjednoczone.jpg";

const Austria = [Austria1, Austria2, Austria3, Austria4];
const Belgia = [Belgia1, Belgia2, Belgia3, Belgia4];
const Dania = [Dania1, Dania2, Dania3, Dania4];
const Francja = [Francja1, Francja2, Francja3, Francja4];
const Niemcy = [Niemcy1, Niemcy2, Niemcy3];
const Wielka = [Wielka1];
const Grecja = [Grecja1, Grecja2, Grecja3, Grecja4];
const Irlandia = [Irlandia1, Irlandia2];
const Włochy = [Włochy1, Włochy2];
const Holandia = [Holandia1, Holandia2, Holandia3, Holandia4];
const Norwegia = [Norwegia1, Norwegia2, Norwegia3, Norwegia4];
const Hiszpania = [Hiszpania1, Hiszpania2];
const Szwajcaria = [Szwajcaria1, Szwajcaria2];
const Stany = [Stany1];

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(Austria[0]);
  const [selectedBelgia, setSelectedBelgia] = useState(Belgia[0]);
  const [selectedDania, setSelectedDania] = useState(Dania[0]);
  const [selectedFrancja, setSelectedFrancja] = useState(Francja[0]);
  const [selectedNiemcy, setSelectedNiemcy] = useState(Niemcy[0]);
  const [selectedWielka, setSelectedWielka] = useState(Wielka[0]);
  const [selectedGrecja, setSelectedGrecja] = useState(Grecja[0]);
  const [selectedIrlandia, setSelectedIrlandia] = useState(Irlandia[0]);
  const [selectedWłochy, setSelectedWłochy] = useState(Włochy[0]);
  const [selectedHolandia, setSelectedHolandia] = useState(Holandia[0]);
  const [selectedNorwegia, setSelectedNorwegia] = useState(Norwegia[0]);
  const [selectedHiszpania, setSelectedHiszpania] = useState(Hiszpania[0]);
  const [selectedSzwajcaria, setSelectedSzwajcaria] = useState(Szwajcaria[0]);
  const [selectedStany, setSelectedStany] = useState(Stany[0]);

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
      <Card>
        <CardBody>
          <h1 className="font-semibold text-3xl ">Wielka Brytania</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Wielka.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedWielka(image)}
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
                src={selectedWielka}
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
          <h1 className="font-semibold text-3xl ">Grecja</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Grecja.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedGrecja(image)}
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
                src={selectedGrecja}
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
          <h1 className="font-semibold text-3xl ">Irlandia</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Irlandia.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedIrlandia(image)}
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
                src={selectedIrlandia}
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
          <h1 className="font-semibold text-3xl ">Włochy</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Włochy.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedWłochy(image)}
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
                src={selectedWłochy}
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
          <h1 className="font-semibold text-3xl ">Holandia</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Holandia.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedHolandia(image)}
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
                src={selectedHolandia}
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
          <h1 className="font-semibold text-3xl ">Norwegia</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Norwegia.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedNorwegia(image)}
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
                src={selectedNorwegia}
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
          <h1 className="font-semibold text-3xl ">Hiszpania</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Hiszpania.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedHiszpania(image)}
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
                src={selectedHiszpania}
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
          <h1 className="font-semibold text-3xl ">Szwajcaria</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Szwajcaria.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedSzwajcaria(image)}
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
                src={selectedSzwajcaria}
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
          <h1 className="font-semibold text-3xl ">Stany Zjednoczone</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[20%] py-4">
              {Stany.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[100px] cursor-pointer"
                  onClick={() => setSelectedStany(image)}
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
                src={selectedStany}
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
