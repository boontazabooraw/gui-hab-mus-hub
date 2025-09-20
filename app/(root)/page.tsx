import HeroInfo from "../components/HeroInfo";
import InstruLogos from "../components/InstruLogos";
import ProductCarousel from "../components/ProductCarousel";
import Welcomehaha from "../components/Welcomehaha";
import Partners from "../components/Partners";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <section className="h-[100vh] md:px-5">
        <Welcomehaha />
      </section>
      <section className="py-10 md:px-5">
        <HeroInfo />
        <InstruLogos />
      </section>
      <section className="pt-10 md:px-5">
        <ProductCarousel />
      </section>
      <section className="pt-10 md:px-5">
        <Partners />
      </section>
      <section className="pt-15 md:px-5">
        <Services />
      </section>
    </>
  );
}

/*
TODO:  

- Fix the fonts (THE FONT CHOICE IS ABSOLUTE SHIT)
- Fix responsiveness for larger viewports

*/
