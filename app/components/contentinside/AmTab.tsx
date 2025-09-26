"use client";

import { ITopSellersData } from "@/app/utils/types";
import Image from "next/image";

interface productsProps {
  products: ITopSellersData[];
}

export default function AmTab({ products }: productsProps) {
  const ag = products.filter((pr) => pr.category === "AM");

  return (
    <div className="flex flex-row gap-2 justify-center">
      {ag.map((pr) => (
        <div
          key={pr.id}
          className="flex flex-col justify-evenly h-93 items-center w-60 gap-3 hover:bg-black/50 rounded-lg transition-all duration-500 ease-in-out p-5"
        >
          <div className="">
            <Image
              src={pr.imgPath}
              alt={pr.name}
              width={pr.imgWidth}
              height={pr.imgWidth}
              quality={100}
              className="hover:scale-120 hover:z-50 transition-all duration-700 ease-out"
            />
          </div>
          <div className="flex flex-col justify-center h-20 text-sm">
            <h1 className="opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in">{pr.name}</h1>
            <h2 className="text-end opacity-70">{pr.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

//TODO: Styling, so I can just copy this component file to make another one
