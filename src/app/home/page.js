"use client";
import React, { useState } from "react";
import bg from "../../../public/Insurance3.png";
import car from "../../../public/vehicle.jpeg";
import property from "../../../public/property.jpeg";
import hero from "../../../public/Hero.png";
import life from "../../../public/life.jpeg";
import company from "../../../public/company.jpeg";
import travel from "../../../public/travel.jpeg";
import school from "../../../public/school.jpeg";
import Image from "next/image";
import FAQ from "../../components/FAQ";
import Card from "../../components/Card";
import Check from "../../components/Check";
import Note from "../../components/Note";

const HomePage = () => {
  const carouselItems = [
    {
      id: 1,
      title: "Vehicle insurance",
      description:
        "W sowiej ofercie posiadamy dwadzieścia towarzystw ubezpieczeniowych co pozwala nam na przygotowanie idealne dobranej oferty do potrzeb klienta.",
      imgSrc: car,
    },

    {
      id: 2,
      title: "Ubezpieczenia majątkowe",
      description:
        "Your safety is the most important thing to us! For years, we have protected our clients' homes and assets, becoming an integral part of their everyday lives.",
      imgSrc: property,
    },

    {
      id: 3,
      title: "Ubezpieczenia na życie",
      description:
        "Zabezpiecz siebie i swoją rodzinę przed niespodziewanymi wydarzeniami. Nasz doświadczony zespół pomoże ci w wyborze odpowiedniego ubezpieczenia na życie, dostosowanego do twoich indywidualnych potrzeb i celów.",
      imgSrc: life,
    },

    {
      id: 4,
      title: "Ubezpieczenia firmowe",
      description:
        "Zapewniamy ochronę wobec różnych ryzyk związanych z prowadzeniem działalności gospodarczej. Dzięki nam obejmiesz ochroną różne aspekty twojej działalności, takie jak ubezpieczenie mienia i mienia firmy przed zniszczeniem, kradzieżą czy pożarem.",
      imgSrc: company,
    },

    {
      id: 5,
      title: "Ubezpieczenia podróżne",
      description:
        "Nasze ubezpieczenia podróżne są dostosowane do indywidualnych potrzeb podróżującego, uwzględniając cel i rodzaj podróży, Pomożemy się wam cieszyć w pełni podróżą, mając pewność, że jesteście dobrze zabezpieczeni na wypadek nieprzewidzianych sytuacji.",
      imgSrc: travel,
    },

    {
      id: 6,
      title: "Ubezpieczenia szkolne",
      description:
        "Zapewnimy ochronę w przypadku nieszczęśliwych wypadków dla twoich pociech, nasze ubezpieczenia szkolne są stworzone specjalnie dla uczniów oraz dzieci przedszkolnych.",
      imgSrc: school,
    },
  ];

  const [items, setItems] = useState([
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
  ]);

  return (
    <>
      <section className="px-[6%] py-[5%] pb-20 md:pb-0 bg-white">
        <div className="grid lg:grid-cols-2 gap-[5%]">
          <div className="my-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#14a8e9]">
              It is worth getting good insurance
            </h1>

            <p className="py-8 lg:text-lg leading-14">
              As a Leader, we offer tailored insurance solutions to meet your
              unique needs, providing peace of mind and comprehensive
              protection. Category All categories Vehicle insurance Property
              insurance Life insurance Company insurance Travel insurance School
              insurance ... Vehicle insurance Our offer includes twenty
              insurance companies, which allows us to prepare an offer perfectly
              tailored to the client's needs.
            </p>
          </div>
          <Image src={bg} alt="bg" />
        </div>
      </section>

      <section className="bg-[#ecfafa] py-[5%] ">
        <h1 className="text-3xl px-[6%] text-[#162a5d] font-semibold uppercase ">
          Insurance
        </h1>
        <div className="w-full overflow-x-auto carousel-container">
          <div className="flex w-full md:w-1/2 lg:w-1/4 animate-carousel  gap-5 py-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 bg-white hover:scale-105 text-start shadow-lg rounded-lg cursor-pointer duration-300"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  className="rounded-t-lg h-[160px] object-cover"
                />
                <div className="py-4 px-3">
                  <h3 className="font-semibold py-2 text-lg">{item.title}</h3>
                  <p className="leading-6 text-gray-700 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .carousel-container::-webkit-scrollbar {
            display: none;
          }
          .carousel-container {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </section>

      <section className="py-[5%] px-[6%] bg-[#ecfafa]  grid lg:grid-cols-2 gap-[5%]">
        <Image
          src={hero}
          alt="img"
          className="h-full object-cover rounded-md"
        />
        <FAQ />
      </section>

      <section className="px-[6%] bg-[#ecfafa]">
        <h3 className="font-bold text-2xl text-center py-4 text-[#162a5d]">
          NASZE USŁUGI
        </h3>
        <div className="grid lg:grid-cols-3 gap-10">
          <Card
            imageSrc={
              "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5308_cropped.JPG"
            }
            footerText={"Ubezpieczenia"}
          />
          <Card
            imageSrc={
              "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5192_cropped.JPG"
            }
            footerText={"Tłumaczenie"}
          />
          <Card
            imageSrc={
              "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5246_cropped.JPG"
            }
            footerText={"Rejestracja pojazdów"}
          />
        </div>
      </section>

      <section className="px-[6%] py-[8%]  bg-[#ecfafa] flex items-center justify-center flex-col">
        <h2 className="font-bold text-[#162a5d] text-2xl text-center">
          Już obsłużyliśmy ponad 110 000 zadowolonych klientów
        </h2>
        <p className="text-md leading-12 mb-8 text-center w-[75%] my-3 mx-auto">
          Twoja satysfakcja jest dla nas najważniejsza i motywuje nas do
          kontynuowania naszej pracy. Poniżej kilka opinii od naszych stałych
          klientów, zobacz dlaczego warto wybrać naszą firmę:
        </p>

        {/* <Carousel /> */}
        <div className="flex gap-[20px] my-[20px] flex-col md:flex-row">
          <Check
            companyName={"KALATA"}
            testimonialText={
              "Korzystając z usług Multiagencji Lider, zapewniliśmy najlepsze ubezpieczenie dla naszych uczniów nauki jazdy i całej floty transportowej. Ich doświadczenie w branży jest dla nas nieocenione. Z całego serca ich polecamy!"
            }
            imageSrc={
              "https://luxury-bunny-b94631.netlify.app/assets/kalata.jpg"
            }
          />
          <Check
            companyName={"RAFRACING"}
            testimonialText={
              "Jako sklep motocyklowy, każdy detal jest dla nas ważny. Z pomocą Grzesia z biura Lider, doskonale dostosowaliśmy nasze ubezpieczenie, zapewniając ochronę naszym klientom i produktom. Dziękujemy za współpracę!"
            }
            imageSrc={
              "https://luxury-bunny-b94631.netlify.app/assets/rafracing.jpg"
            }
          />
        </div>
        <Check
          companyName={"Grzegorczyk Hale Stalowe"}
          testimonialText={
            "Dzięki wsparciu biura Lider, nasze hale stalowe są doskonaleubezpieczone. Profesjonalne porady i zaangażowanie Grzesia pozwalają nam skupić się na naszej głównej działalności.Dziękujemy za współpracę!"
          }
          imageSrc={
            "https://luxury-bunny-b94631.netlify.app/assets/testimonials1.jpg"
          }
        />
      </section>

      <Note />
    </>
  );
};

export default HomePage;
