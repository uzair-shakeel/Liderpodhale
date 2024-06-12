"use client";
import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Austria1 from "../../../public/Austria1.jpg";
import Austria2 from "../../../public/Austria2.jpg";
import Austria3 from "../../../public/Austria3.jpg";
import Austria4 from "../../../public/Austria4.jpg";

const Austria = [Austria1, Austria2, Austria3, Austria4];

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="py-12 px-[10%] bg-[#ecfafa]">
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
    </div>
  );
};

export default Page;
