import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
const App = ({ imageSrc, footerText, linkText }) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listening to music"
        className="object-cover w-full"
        src={imageSrc}
      />
      <CardFooter className="justify-between bg-gradient-to-r from-purple-400/70 border-white via-blue-500/55 to-blue-900/70 border-white/20 border-1 overflow-hidden py-1 absolute rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md text-white font-semibold">{footerText}</p>
        <Link href={linkText}>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Pokaż więcej
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default App;
