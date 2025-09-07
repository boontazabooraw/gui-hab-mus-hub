"use client";

import Image from "next/image";

const DealerLogos = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <Image
        src={"/images/dd-logo.png"}
        alt="D&D Custom Guitars logo"
        width={150}
        height={150}
        quality={100}
      />
      <Image
        src={"/images/guitarpusher-logo.png"}
        alt="Guitar Pusher logo"
        width={100}
        height={100}
        quality={100}
      />
      <Image
        src={"/images/jbmusic-logo.png"}
        alt="JB Music logo"
        width={100}
        height={100}
        quality={100}
      />
      <Image
        src={"/images/jollymusic-logo.png"}
        alt="Jolly Music logo"
        width={120}
        height={120}
        quality={100}
      />
      <Image
        src={"/images/rj-logo.png"}
        alt="RJ logo"
        width={90}
        height={90}
        quality={100}
      />
    </div>
  );
};

export default DealerLogos;
