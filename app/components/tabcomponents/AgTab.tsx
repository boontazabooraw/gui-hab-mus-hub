"use client";

import { ITopSellersData } from "@/app/utils/types";

interface productsProps {
  products: ITopSellersData[];
}

export default function AgTab({ products }: productsProps) {
  const ag = products.filter(pr => pr.category === "AG");

  return (
    <div>
      {ag.map((pr) => (
        <div key={pr.id}>
          <h1>{pr.name}</h1>
          <h2>{pr.price}</h2>
        </div>
      ))}
    </div>
  );
}
