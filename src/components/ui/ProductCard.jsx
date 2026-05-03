
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button from "./Button";

const ProductCard = ({ product }) => {
    // console.log(product);

    const { id, name, brand, price, rating, stock, description, image, category } = product;

    return (
        <div className="group border border-gray-200 rounded-3xl overflow-hidden transition-all hover:-translate-y-1.5 shadow-xs hover:shadow-md duration-500">
            <div className="relative aspect-square overflow-hidden">
                <Image
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                    src={image}
                    alt={name}
                />
                <span className="absolute z-10 top-3 left-3 py-1 px-4 rounded-full text-sm bg-orange-200 text-[#fd7933] font-medium">
                    {category}
                </span>
            </div>
            <div className="p-4 bg-white space-y-2">
                <div className="space-y-1.5">
                    <p className="text-[#52657a] text-xs uppercase font-normal">{brand}</p>
                    <h3 className="text-[#0C2842] text-base lg:text-lg font-semibold">{name}</h3>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                        <div className="flex items-center font-medium gap-1">
                            <FaStar className="text-[#fd7933]" />
                            <span className="font-medium">{rating}</span>
                        </div>
                        <span className="text-muted-foreground">· {stock} in stock</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="text-[#fd7933] font-bold text-2xl">${price.toFixed(2)}</h1>
                    <Button as="link" href={`/products/${id}`} text={'View Details'} size="sm" animated animatedSpanOne={'animate-ping'} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;