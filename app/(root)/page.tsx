import HeroBrands from "../components/HeroBrands";
import HeroInfo from "../components/HeroInfo";
import ProductsSection from "../components/ProductsSection";
import ProductTabs from "../components/ProductTabs";
import Welcomehaha from "../components/Welcomehaha";

export default function Home() {
  return (
    <>
      <section className="h-[100vh] md:px-5">
        <Welcomehaha />
      </section>
      <section className="pt-10 md:px-5">
        <HeroInfo />
      </section>
      <section className="pt-10 md:px-5">
        <ProductTabs />
      </section>
      <section className="h-[1000px] pt-10 md:px-50">
        <HeroBrands />
      </section>
      <section className="h-[1000px] pt-10 md:px-50">
        <ProductsSection />
      </section>
    </>
  );
}

//TODO: Products
