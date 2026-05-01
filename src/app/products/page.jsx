import Container from "@/components/shared/Container";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { getProducts } from "@/lib/actions";

const ProductsPage = async () => {
    const products = await getProducts();
    // console.log(products);

    return (
        <div className="py-20">
            <Container>
                <div className="text-center">
                    <SectionTitle paraTitle={'Shop the collection'} HeadingTitle={'All Summer Essentials'} headingClass={'text-3xl md:text-4xl xl:text-5xl'} />
                    <p className="text-[#52657a] text-base font-normal mt-3">Hand-picked products to keep you cool, safe, and stylish.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-6 mt-10">
                    {
                        products.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default ProductsPage;