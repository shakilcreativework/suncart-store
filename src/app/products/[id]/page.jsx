"use client"
import Container from "@/components/shared/Container";
import ProductDetails from "@/components/ui/ProductDetails";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoArrowBackSharp } from "react-icons/io5";

const res = await fetch('https://suncart-store.vercel.app/products.json');
const products = await res.json();
// console.log(products);

const ProductDetailsPage = () => {
    const {id} = useParams();
    // console.log(id);

    const product = products?.find(product => product.id === id)

    return (
        <div className="py-20">
            <Container>
                <div className="space-y-10">
                    <Link href={`/products`} className="hover:text-[#fd7933] text-[#52657a] font-semibold text-sm capitalize flex items-center gap-2 w-fit"><IoArrowBackSharp /> Back to products</Link>
                    <div>
                        <div>
                            <ProductDetails product={product} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetailsPage;