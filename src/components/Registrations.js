import React from "react";
import reg1 from "../../public/registration1.jpeg";
import reg2 from "../../public/registration2.jpg";
import reg3 from "../../public/registration3.jpeg";
import reg4 from "../../public/registration4.jpeg";
import Image from "next/image";

const Registrations = () => {
  const items = [
    {
      id: 1,
      title: "Pośrednictwo rejestracji pojazdu",
      description:
        "Nasi specjaliści pomagają w procesie rejestracji i opłat celno skarbowych od pojazdów zakupionych w kraju i z za zagranicy. Nasze wieloletnie doświadczenie pozwoli zaoszczędzić czas i wysiłek, unikając biurokratycznych procedur i kolejek w urzędach.",
      imgSrc: reg1,
    },

    {
      id: 2,
      title: "Fachowa Pomoc i Doradztwo",
      description:
        "Masz zamiar importować pojazd lub zakupić w kraju. Zadzwoń do nas i bezpiecznie dokonaj zakupu. Posiadamy wiedzę i doświadczenie, które pozwalają skutecznie poradzić sobie z różnymi aspektami oraz wymogami prawnymi i procedurami administracyjnymi.",
      imgSrc: reg2,
    },

    {
      id: 3,
      title: "Rejestracja Pojazdu zabytkowego",
      description:
        "Posiadamy duże doświadczenie w rejestracji pojazdów zabytkowych. Pomagamy kompleksowo załatwić sprawę, przeprowadzimy za Ciebie całą procedurę, aż do otrzymania żółtych tablic.",
      imgSrc: reg3,
    },
    {
      id: 4,
      title: "Zagubione Tablice",
      description:
        "Zagubienie tablicy rejestracyjnej lub dowodu rejestracyjnego to już żaden problem. Dzięki naszym usługą możesz uzyskać duplikat bez zbędnego wysiłku.",
      imgSrc: reg4,
    },
  ];
  return (
    <div className="px-[5%] lg:px-[10%] py-14">
      <h1 className="uppercase pb-8 font-bold text-3xl text-[#14a8e9] text-center">
        Rejestracja
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-default bg-white  hover:border-[#14a8e9] hover:text-center border-2 text-start shadow-lg duration-[.7s]"
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              className="h-[200px] lg:h-[260px] object-cover"
            />
            <div className="py-4 px-3">
              <h3 className="font-semibold py-2 text-xl text-start md:text-center lg:text-start lg:text-lg">
                {item.title}
              </h3>
              <p className="leading-6 text-gray-700 text-sm text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registrations;
