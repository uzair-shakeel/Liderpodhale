import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Check from "./Check";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Check
          companyName={"Grzegorczyk Hale Stalowe"}
          testimonialText={
            "Dzięki wsparciu biura Lider, nasze hale stalowe są doskonaleubezpieczone. Profesjonalne porady i zaangażowanie Grzesia pozwalają nam skupić się na naszej głównej działalności.Dziękujemy za współpracę!"
          }
          imageSrc={
            "https://luxury-bunny-b94631.netlify.app/assets/testimonials1.jpg"
          }
        />
      </div>
      <div>
        <Check
          companyName={"Grzegorczyk Hale Stalowe"}
          testimonialText={
            "Dzięki wsparciu biura Lider, nasze hale stalowe są doskonaleubezpieczone. Profesjonalne porady i zaangażowanie Grzesia pozwalają nam skupić się na naszej głównej działalności.Dziękujemy za współpracę!"
          }
          imageSrc={
            "https://luxury-bunny-b94631.netlify.app/assets/testimonials1.jpg"
          }
        />
      </div>
      <div>
        <Check
          companyName={"Grzegorczyk Hale Stalowe"}
          testimonialText={
            "Dzięki wsparciu biura Lider, nasze hale stalowe są doskonaleubezpieczone. Profesjonalne porady i zaangażowanie Grzesia pozwalają nam skupić się na naszej głównej działalności.Dziękujemy za współpracę!"
          }
          imageSrc={
            "https://luxury-bunny-b94631.netlify.app/assets/testimonials1.jpg"
          }
        />
      </div>
    </Slider>
  );
}
