"use client";

import DealerLogos from "./DealerLogos";
import InstruLogos from "./InstruLogos";

const HeroBrands = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <div>
        <h1 className="text-2xl text-center font-bold mb-5">Authorized Dealer</h1>
        <DealerLogos />
      </div>
      <div>
        <h1 className="text-2xl text-center font-bold mb-5">
          Guitars, Basses, Drums, Keyboards, Amplifiers & More
        </h1>
        <InstruLogos />
      </div>
      <div className="relative"></div>
    </div>
  );
};

export default HeroBrands;
