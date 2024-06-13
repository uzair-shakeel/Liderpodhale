import React from "react";
import car from "../../public/vehicle.jpeg";
import property from "../../public/property.jpeg";
import life from "../../public/life.jpeg";
import company from "../../public/company.jpeg";
import travel from "../../public/travel.jpeg";
import school from "../../public/school.jpeg";
import Image from "next/image";

const Insurances = () => {
  const items = [
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
  return (
    <div className="px-[5%] lg:px-[10%] py-14">
      <h1 className="uppercase pb-8 font-bold text-3xl text-[#14a8e9] text-center">
        Ubezpieczenia
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-default bg-white  hover:border-[#14a8e9] hover:text-center border-2 text-start shadow-lg duration-[.7s]"
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              className="h-[160px] object-cover"
            />
            <div className="py-4 px-3 text-start md:text-center lg:text-start">
              <h3 className="font-semibold py-2 text-lg">{item.title}</h3>
              <p className="leading-6 text-justify text-gray-700 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insurances;
