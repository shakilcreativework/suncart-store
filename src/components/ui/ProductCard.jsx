
import Image from "next/image";

const ProductCard = ({ product }) => {
    console.log(product);

    const { id, name, brand, price, rating, stock, description, image, category } = product;

    return (
        <div className="group rounded-3xl overflow-hidden border border-gray-200 shadow-xs transition-all">
            <div className="relative aspect-square overflow-hidden">
                <Image width={300} height={400} className="w-full h-full object-cover" src={image} alt={name} />
                <span className="absolute z-10 top-3 left-3 py-1 px-4 rounded-full text-sm bg-orange-200 text-[#fd7933] font-medium">
                    {category}
                </span>
            </div>
        </div>
    );
};

export default ProductCard;