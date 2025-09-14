"use client";

import { ITopSellersData } from "@/app/utils/types";
import Image from "next/image";

interface productsProps {
  products: ITopSellersData[];
}

export default function BaTab({ products }: productsProps) {
  const ag = products.filter((pr) => pr.category === "BA");

  return (
    <div className="flex flex-row gap-2 justify-center">
      {ag.map((pr) => (
        <div
          key={pr.id}
          className="flex flex-col justify-between h-93 items-center w-60 hover:bg-neutral-900 rounded-lg transition-all duration-500 ease-in-out p-5"
        >
          <div className="">
            <Image
              src={pr.imgPath}
              alt={pr.name}
              width={pr.imgWidth}
              height={pr.imgWidth}
              quality={80}
            />
          </div>
          <div className="flex flex-col justify-between h-20 text-sm pb-5">
            <h1>{pr.name}</h1>
            <h2 className="text-end opacity-70">{pr.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

//TODO: Styling, so I can just copy this component file to make another one
