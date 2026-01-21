import CategoryMenu from "@/components/CategoryMenu";
import Hero from "@/components/Hero";
import IntroducingSection from "@/components/IntroducingSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroducingSection />
      <CategoryMenu />
      <ProductsSection />
    </>
  );
}
