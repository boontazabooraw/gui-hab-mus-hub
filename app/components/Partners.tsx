"use client";

import DealerLogos from "./DealerLogos";

const HeroBrands = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <div>
        <h1 className="text-2xl text-center font-heading mb-5 tracking-widest ">Our official partners</h1>
        <DealerLogos />
      </div>
    </div>
  );
};

export default HeroBrands;
