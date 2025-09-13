"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgTab from "./tabcomponents/AgTab";
import { products } from "../utils/products";

const ProductTabs = () => {
  return (
    <>
      <Tabs defaultValue="AG" className="">
        <TabsList className="bg-transparent h-15">
          <TabsTrigger value="AG">Acoustic Guitars</TabsTrigger>
          <TabsTrigger value="EG">Electric Guitars</TabsTrigger>
          <TabsTrigger value="BA">Basses</TabsTrigger>
          <TabsTrigger value="AM">Amplifiers</TabsTrigger>
          <TabsTrigger value="ETC">Others</TabsTrigger>
        </TabsList>
        <TabsContent value="AG">
            <AgTab products={products}/>
        </TabsContent>
        <TabsContent value="EG">EG Products here</TabsContent>
        <TabsContent value="BA">BA Products here</TabsContent>
        <TabsContent value="AM">AM Products here</TabsContent>
        <TabsContent value="ETC">ETC Products here</TabsContent>
      </Tabs>
    </>
  );
};

export default ProductTabs;

//TODO: Filter every item per Category and add imgPath
