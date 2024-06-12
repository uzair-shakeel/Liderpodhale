import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

export default function App() {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-screen"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-12 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="https://luxury-bunny-b94631.netlify.app/assets/Liderphoto2.jpg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-semibold mt-2">
                  GRZEGORZ WARCIAK
                </h1>
                <p className="text-small text-foreground/80 pb-8 mt-2">
                  Założyciel firmy Liderpodhale
                </p>
                <h3 className="text-foreground/90 text-justify	">
                  Cześć! Nazywam się Grzegorz Warciak i jestem dumnym
                  właścicielem Multiagencji Lider. Moja przygoda z
                  ubezpieczeniami, rejestracją aut i tłumaczeniami rozpoczęła
                  się w 2006 roku, kiedy postanowiłem, że chcę przynieść
                  mieszkańcom Podhala usługi najwyższej jakości w tych
                  dziedzinach. Założyłem Lider z jednym celem: uczynić życie
                  moich klientów prostszym i bardziej bezpiecznym. Od samego
                  początku byłem zdeterminowany, by nie tylko oferować
                  standardowe usługi, ale też dostosowywać je do indywidualnych
                  potrzeb każdej osoby, która odwiedza nasze biuro. Moje pasje,
                  takie jak jazda na motocyklu, cross czy wędrówki po górach,
                  nauczyły mnie, jak ważne jest poczucie bezpieczeństwa i
                  pewności siebie. Te doświadczenia przekładają się na to, jak
                  prowadzę Multiagencję Lider - z zaangażowaniem, determinacją i
                  dbałością o każdy, nawet najdrobniejszy szczegół. Zapraszam do
                  współpracy. Razem znajdziemy rozwiązanie idealnie dostosowane
                  do Twoich potrzeb!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
