"use client";
import React from "react";
import Note from "@/components/Note";
import Safe from "@/components/Safe";
import FAQ from "@/components/FAQ";
import Insurances from "@/components/Insurances";

const Insurance = () => {
  return (
    <div className="bg-[#ecfafa]">
      <Insurances />
      <Safe />
      <div className="px-[5%] lg:px-[10%] py-8">
        <FAQ />
      </div>
      <Note />
    </div>
  );
};

export default Insurance;
