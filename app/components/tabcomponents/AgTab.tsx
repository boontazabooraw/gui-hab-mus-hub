"use client";

import { ITopSellersData } from "@/app/utils/types";
import Image from "next/image";

interface productsProps {
  products: ITopSellersData[];
}

export default function AgTab({ products }: productsProps) {
  const ag = products.filter((pr) => pr.category === "AG");

  return (
    <div className="flex flex-row gap-2 justify-center">
      {ag.map((pr) => (
        <div
          key={pr.id}
          className="flex flex-col justify-between items-center w-60 gap-3 hover:bg-neutral-900 rounded-lg transition-all duration-500 ease-in-out p-5"
        >
          <div className="">
            <Image
              src={pr.imgPath}
              alt={pr.name}
              width={pr.imgWidth}
              height={pr.imgWidth}
              quality={100}
            />
          </div>
          <div className="flex flex-col text-center items-center">
            <h1>{pr.name}</h1>
            <h2>{pr.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
