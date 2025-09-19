"use client";

import Image from "next/image";

const bgHeroStyle = {
  filter: "brightness(0.7)",
  zindex: "-1",
  mask: 'linear-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))'


};

const stellarLogoStyle = {
  filter: "drop-shadow(5px 5px 30px #ffffff) invert(100%)",
  border: "",
};

const Welcomehaha = () => {
  return (
    <div>
      <div className="relative z-1">
        <div className="flex flex-col justify-center items-center gap-10 h-dvh">
          <div>
            <h1 className={`text-5xl font-black text-center text-amber-200`}>
              <Image
                src={"/images/__stellar-logo.png"}
                alt="Stellar logo"
                width={400}
                height={400}
                quality={100}
                style={stellarLogoStyle}
              />
            </h1>
          </div>
          <div className="text-white text-center drop-shadow-md/400">
            <h2 className="text-2xl font-bold">
              First custom Guitar in Bataan.
            </h2>
            <h2 className="text-red-200">
              Available exclusively at any Guitar Habit Music Hub branch.
            </h2>
          </div>
        </div>
      </div>
      <Image
        src={"/images/stellar-home.jpg"}
        alt="preview"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={bgHeroStyle}
        className="fade-mask-image"
      />
    </div>
  );
};

//TODO: Add CTA button (Shop now | Book a service.)

export default Welcomehaha;
