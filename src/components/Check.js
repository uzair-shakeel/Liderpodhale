import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function App() {

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 w-full items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="https://luxury-bunny-b94631.netlify.app/assets/testimonials1.jpg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <p className="text-small text-foreground/80">
                  Dzięki wsparciu biura Lider, nasze hale stalowe są doskonale
                  // ubezpieczone. Profesjonalne porady i zaangażowanie Grzesia
                  pozwalają // nam skupić się na naszej głównej działalności.
                  Dziękujemy za // współpracę!
                </p>
                <h1 className="text-large font-medium mt-2">
                  Grzegorczyk Hale Stalowe
                </h1>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
