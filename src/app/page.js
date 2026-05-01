import Hero from "@/components/sections/Hero";
import PopularProducts from "@/components/sections/PopularProducts";
import TopBrands from "@/components/sections/TopBrands";


export default async function Home() {

  return (
    <div>
      <Hero />
      <PopularProducts />
      <TopBrands />
    </div>
  );
}
