"use client";
import React, { useState, useEffect } from "react";
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
import { useLanguage } from "@/context/LanguageContext";

const HomePage = () => {
  const { language } = useLanguage();
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

  const cardDataPolish = [
    {
      imageSrc:
        "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5308_cropped.JPG",
      footerText: "Ubezpieczenia",
      linkText: "insurance",
    },
    {
      imageSrc:
        "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5192_cropped.JPG",
      footerText: "Tłumaczenie",
      linkText: "translation",
    },
    {
      imageSrc:
        "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5246_cropped.JPG",
      footerText: "Rejestracja pojazdów",
      linkText: "registration",
    },
  ];

  const cardDataUkrainian = [
    {
      imageSrc:
        "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5308_cropped.JPG",
      footerText: "Страхування",
      linkText: "insurance",
    },
    {
      imageSrc:
        "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5192_cropped.JPG",
      footerText: "Переклад",
      linkText: "translation",
    },
    {
      imageSrc:
        "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5246_cropped.JPG",
      footerText: "Реєстрація транспортних засобів",
      linkText: "registration",
    },
  ];

  const testimonialsPolish = [
    {
      companyName: "KALATA",
      testimonialText:
        "Korzystając z usług Multiagencji Lider, zapewniliśmy najlepsze ubezpieczenie dla naszych uczniów nauki jazdy i całej floty transportowej. Ich doświadczenie w branży jest dla nas nieocenione. Z całego serca ich polecamy!",
      imageSrc: "https://luxury-bunny-b94631.netlify.app/assets/kalata.jpg",
    },
    {
      companyName: "RAFRACING",
      testimonialText:
        "Jako sklep motocyklowy, każdy detal jest dla nas ważny. Z pomocą Grzesia z biura Lider, doskonale dostosowaliśmy nasze ubezpieczenie, zapewniając ochronę naszym klientom i produktom. Dziękujemy za współpracę!",
      imageSrc: "https://luxury-bunny-b94631.netlify.app/assets/rafracing.jpg",
    },
    {
      companyName: "Grzegorczyk Hale Stalowe",
      testimonialText:
        "Dzięki wsparciu biura Lider, nasze hale stalowe są doskonale ubezpieczone. Profesjonalne porady i zaangażowanie Grzesia pozwalają nam skupić się na naszej głównej działalności. Dziękujemy za współpracę!",
      imageSrc:
        "https://luxury-bunny-b94631.netlify.app/assets/testimonials1.jpg",
    },
  ];

  const testimonialsUkrainian = [
    {
      companyName: "КАЛАТА",
      testimonialText:
        "Використовуючи послуги Multiagencji Lider, ми забезпечили найкраще страхування для наших учнів водіння та всього транспортного парку. Їхній досвід у галузі для нас безцінний. Щиро рекомендуємо їх!",
      imageSrc: "https://luxury-bunny-b94631.netlify.app/assets/kalata.jpg",
    },
    {
      companyName: "РАФРЕЙСИНГ",
      testimonialText:
        "Як магазин мотоциклів, кожна деталь для нас важлива. Завдяки допомозі Гжеся з офісу Lider, ми чудово налаштували наше страхування, забезпечивши захист нашим клієнтам і продуктам. Дякуємо за співпрацю!",
      imageSrc: "https://luxury-bunny-b94631.netlify.app/assets/rafracing.jpg",
    },
    {
      companyName: "Grzegorczyk Hale Stalowe",
      testimonialText:
        "Завдяки підтримці офісу Lider, наші сталеві зали чудово застраховані. Професійні поради та залучення Гжеся дозволяють нам зосередитися на нашій основній діяльності. Дякуємо за співпрацю!",
      imageSrc:
        "https://luxury-bunny-b94631.netlify.app/assets/testimonials1.jpg",
    },
  ];

  const carouselItems = language === "pl" ? itemsPolish : itemsUkrainian;
  // const carouselItems = itemsUkrainian;

  const cardData = language === "pl" ? cardDataPolish : cardDataUkrainian;

  const testimonials =
    language === "pl" ? testimonialsPolish : testimonialsUkrainian;

  const [items, setItems] = useState([
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
  ]);

  useEffect(() => {
    setItems([
      ...carouselItems,
      ...carouselItems,
      ...carouselItems,
      ...carouselItems,
    ]);
  }, [language]);

  return (
    <>
      <section className="px-[6%] py-[5%] pb-20 md:pb-10 bg-white">
        <div className="grid lg:grid-cols-2 gap-[5%]">
          <div className="my-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#14a8e9]">
              {language === "pl"
                ? `Warto mieć
              dobre ubezpieczenie`
                : `Добре мати
              хороша страховка`}
            </h1>
            <p className="py-8 lg:text-lg leading-14">
              {language === "pl"
                ? `Jako Lider oferujemy dostosowane do indywidualnych potrzeb
              rozwiązania ubezpieczeniowe, zapewniające spokój ducha i
              kompleksową ochronę. Kategorie Wszystkie kategorie Ubezpieczenie
              pojazdu Ubezpieczenie mienia Ubezpieczenie na życie Ubezpieczenie
              firmowe Ubezpieczenie podróżne Ubezpieczenie szkolne ...
              Ubezpieczenie pojazdu Nasza oferta obejmuje dwadzieścia firm
              ubezpieczeniowych, co pozwala nam przygotować ofertę idealnie
              dopasowaną do potrzeb klienta.`
                : `Як лідер, ми пропонуємо індивідуальне
              страхові рішення, які забезпечують душевний спокій і
              Комплексний захист. Категорії Все страхування
              Страхування транспортних засобів Страхування майна Страхування життя
              бізнес Туристичне страхування Шкільне страхування ...
              Страхування транспортних засобів Наша пропозиція включає двадцять страхових компаній, що дозволяє нам готувати пропозиції`}
            </p>
          </div>
          <Image src={bg} alt="bg" />
        </div>
      </section>

      <section className="bg-[#ecfafa] py-[5%] ">
        <h1 className="text-3xl px-[6%] text-[#162a5d] font-semibold uppercase ">
          {language === "pl" ? `Ubezpieczenia` : `Страхування`}
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
          {language === "pl" ? `NASZE USŁUGI` : `НАШІ ПОСЛУГИ`}
        </h3>
        <div className="grid lg:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              footerText={card.footerText}
              linkText={card.linkText}
            />
          ))}
        </div>
      </section>

      <section className="px-[6%] py-[8%] bg-[#ecfafa] flex items-center justify-center flex-col">
        <h2 className="font-bold text-[#162a5d] text-2xl text-center">
          {language === "pl"
            ? "Już obsłużyliśmy ponad 110 000 zadowolonych klientów"
            : "Ми вже обслуговували понад 110 000 задоволених клієнтів"}
        </h2>
        <p className="text-md leading-12 mb-8 text-center w-[75%] my-3 mx-auto">
          {language === "pl"
            ? "Twoja satysfakcja jest dla nas najważniejsza i motywuje nas do kontynuowania naszej pracy. Poniżej kilka opinii od naszych stałych klientów, zobacz dlaczego warto wybrać naszą firmę:"
            : "Ваше задоволення є для нас найважливішим і мотивує нас продовжувати нашу роботу. Нижче наведено кілька відгуків від наших постійних клієнтів, дізнайтеся, чому варто обрати нашу компанію:"}
        </p>

        <div className="flex gap-[20px] my-[20px] flex-col md:flex-row">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <Check
              key={index}
              companyName={testimonial.companyName}
              testimonialText={testimonial.testimonialText}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
        <Check
          companyName={testimonials[2].companyName}
          testimonialText={testimonials[2].testimonialText}
          imageSrc={testimonials[2].imageSrc}
        />
      </section>

      <Note />
    </>
  );
};

export default HomePage;
