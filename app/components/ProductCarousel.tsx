"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"
import AgTab from "./contentinside/AgTab";
import { products } from "../utils/products";

const ProductCarousel = () => {
  return (
    <div className="flex justify-center items-center">
      <Carousel className="w-100"
      plugins={[
        Autoplay({
            delay: 5000,
        })
      ]}>
        <CarouselContent>
          <CarouselItem>
                    <AgTab products={products} />
          </CarouselItem>
          <CarouselItem>EG Content</CarouselItem>
          <CarouselItem>Bass Content</CarouselItem>
          <CarouselItem>Amp Content</CarouselItem>
          <CarouselItem>ETC Content</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
