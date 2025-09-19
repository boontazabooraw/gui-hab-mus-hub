"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext, //
  CarouselPrevious, //
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { products } from "../utils/products";

//Content Components
import AgTab from "./contentinside/AgTab";
import EgTab from "./contentinside/EgTab";
import BaTab from "./contentinside/BaTab";
import AmTab from "./contentinside/AmTab";
import EtcTab from "./contentinside/EtcTab";

const ProductCarousel = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-bold">Top Sellers</h1>
      <Carousel
        className="w-100"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <AgTab products={products} />
          </CarouselItem>
          <CarouselItem>
            <EgTab products={products} />
          </CarouselItem>
          <CarouselItem>
            <BaTab products={products} />
          </CarouselItem>
          <CarouselItem>
            <AmTab products={products} />
          </CarouselItem>
          <CarouselItem>
            <EtcTab products={products} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
