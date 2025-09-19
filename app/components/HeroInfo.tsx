"use client";

import InstruLogos from "./InstruLogos";

const HeroInfo = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <div>
        <h1 className="w-80 text-3xl font-bold text-center">
          Bataan’s Hub for Musicians — Gear, Service & Passion
        </h1>
      </div>
      <div className="md:w-200 w-100 text-justify">
        <span className="text-gray-300">
          Welcome to Guitar Habit Music Hub — your trusted destination for
          world-class instruments and professional guitar services in Bataan.
          From globally recognized brands to our very own Stellar Guitars, we
          provide everything you need to play, perform, and sound your best.
        </span>
        <br />
        <br />
        <span className="text-gray-300">
          We’re proud to be an authorized dealer of the biggest and most trusted
          names in music, including:
        </span>
        <br />
        <br />
        <InstruLogos />
      </div>
    </div>
  );
};

export default HeroInfo;
