"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import { iServiceCardData } from "../utils/types";

const ServiceCard = ({ imgPath, title, description }: iServiceCardData) => {
  return (
    <Card className="md:w-100 w-80 bg-transparent overflow-hidden border-none">
      <CardHeader>
        <Image
          src={imgPath}
          alt="JB Music logo"
          width={300}
          height={300}
          quality={100}
          style={{
            width: "100%",
            height: "auto",
            mask: "linear-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
          }}
          className="fade-mask-image-service brightness-75 hover:brightness-90 hover:scale-110 transition-all duration-700 ease-out"
        />
      </CardHeader>
      <CardContent>
        <h1 className="font-heading tracking-wider text-foreground/90">
          {title}
        </h1>
      </CardContent>
      <CardFooter className="pb-2">
        <span className="font-rethink text-sm text-foreground/60">
          {description}
        </span>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
