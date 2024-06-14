import React from "react";
import car from "../../public/vehicle.jpeg";
import property from "../../public/property.jpeg";
import life from "../../public/life.jpeg";
import company from "../../public/company.jpeg";
import travel from "../../public/travel.jpeg";
import school from "../../public/school.jpeg";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Insurances = () => {
  const { language } = useLanguage() || {};
  const itemsPolish = [
    {
      id: 1,
      title: "Ubezpieczenie pojazdu",
      description:
        "W swojej ofercie posiadamy dwadzieścia towarzystw ubezpieczeniowych, co pozwala nam na przygotowanie idealnie dobranej oferty do potrzeb klienta.",
      imgSrc: car,
    },
    {
      id: 2,
      title: "Ubezpieczenia majątkowe",
      description:
        "Twoje bezpieczeństwo jest dla nas najważniejsze! Od lat chronimy domy i majątek naszych klientów, stając się integralną częścią ich codziennego życia.",
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
        "Nasze ubezpieczenia podróżne są dostosowane do indywidualnych potrzeb podróżującego, uwzględniając cel i rodzaj podróży. Pomożemy ci w pełni cieszyć się podróżą, mając pewność, że jesteś dobrze zabezpieczony na wypadek nieprzewidzianych sytuacji.",
      imgSrc: travel,
    },
    {
      id: 6,
      title: "Ubezpieczenia szkolne",
      description:
        "Zapewnimy ochronę w przypadku nieszczęśliwych wypadków dla twoich pociech. Nasze ubezpieczenia szkolne są stworzone specjalnie dla uczniów oraz dzieci przedszkolnych.",
      imgSrc: school,
    },
  ];

  const itemsUkrainian = [
    {
      id: 1,
      title: "Страхування транспортних засобів",
      description:
        "У нашій пропозиції є двадцять страхових компаній, що дозволяє нам підготувати ідеально підібрану пропозицію відповідно до потреб клієнта.",
      imgSrc: car,
    },
    {
      id: 2,
      title: "Майнове страхування",
      description:
        "Ваша безпека є для нас найважливішою! Протягом багатьох років ми захищаємо будинки та майно наших клієнтів, стаючи невід'ємною частиною їхнього повсякденного життя.",
      imgSrc: property,
    },
    {
      id: 3,
      title: "Страхування життя",
      description:
        "Забезпечте себе та свою родину від непередбачених подій. Наша досвідчена команда допоможе вам вибрати відповідне страхування життя, адаптоване до ваших індивідуальних потреб і цілей.",
      imgSrc: life,
    },
    {
      id: 4,
      title: "Корпоративне страхування",
      description:
        "Ми забезпечуємо захист від різних ризиків, пов'язаних з веденням бізнесу. Завдяки нам ви покриєте захистом різні аспекти вашої діяльності, такі як страхування майна та майна компанії від руйнування, крадіжки чи пожежі.",
      imgSrc: company,
    },
    {
      id: 5,
      title: "Туристичне страхування",
      description:
        "Наші туристичні страхування адаптовані до індивідуальних потреб мандрівника, з урахуванням мети та типу подорожі. Ми допоможемо вам повністю насолодитися подорожжю, будучи впевненими, що ви добре захищені у разі непередбачених ситуацій.",
      imgSrc: travel,
    },
    {
      id: 6,
      title: "Шкільне страхування",
      description:
        "Ми забезпечимо захист у разі нещасних випадків для ваших дітей. Наші шкільні страхування створені спеціально для учнів та дітей дошкільного віку.",
      imgSrc: school,
    },
  ];

  const items = language === "pl" ? itemsPolish : itemsUkrainian;
  return (
    <div className="px-[5%] lg:px-[10%] py-14">
      <h1 className="uppercase pb-8 font-bold text-3xl text-[#14a8e9] text-center">
        {language === "pl" ? "Ubezpieczenia" : "Страхування"}
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
