"use client";
import React from "react";
import Note from "@/components/Note";
import Safe from "@/components/Safe";
import FAQ from "@/components/FAQ";
import Registrations from "@/components/Registrations";

const page = () => {
  return (
    <div className="bg-[#ecfafa]">
      <Registrations />
      <Safe />
      <div className="px-[5%] lg:px-[10%] py-8">
        <FAQ />
      </div>
      <Note />
    </div>
  );
};

export default page;
