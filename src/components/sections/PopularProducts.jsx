import { getProducts } from "@/lib/actions";
import Container from "../shared/Container";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../ui/ProductCard";

const PopularProducts = async () => {
    const products = await getProducts();
    // console.log(products);

    return (
        <div className="py-20">
            <Container>
                <SectionTitle paraTitle={'Trending Now'} HeadingTitle={'Popular this summer'} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6 mt-10">
                    {
                        products.slice(0, 3).map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default PopularProducts;