import HeroBrands from "../components/HeroBrands";
import HeroInfo from "../components/HeroInfo";
import ProductCarousel from "../components/ProductCarousel";
import ProductsSection from "../components/ProductsSection";
import Welcomehaha from "../components/Welcomehaha";

export default function Home() {
  return (
    <>
      <section className="h-[100vh] md:px-5">
        <Welcomehaha />
      </section>
      <section className="pt-10 md:px-5 ">
        <HeroInfo />
      </section>
      <section className="pt-10 md:px-5">
        <ProductCarousel />
      </section>
      <section className="h-[1000px] pt-10 md:px-50">
        <HeroBrands />
      </section>
    </>
  );
}

/*
TODO:  

- Fix the fonts (THE FONT CHOICE IS ABSOLUTE SHIT)
- Fix responsiveness for larger viewports

*/
