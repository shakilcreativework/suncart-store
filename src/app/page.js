import Hero from "@/components/sections/Hero";
import PopularProducts from "@/components/sections/PopularProducts";
import SummerTips from "@/components/sections/SummerTips";
import TopBrands from "@/components/sections/TopBrands";


export default async function Home() {

  return (
    <div>
      <Hero />
      <PopularProducts />
      <TopBrands />
      <SummerTips />
    </div>
  );
}
