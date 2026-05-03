import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button from "./Button";
import { LuShoppingBag } from "react-icons/lu";

const ProductDetails = ({ product }) => {
    // console.log(product);

    const { id, name, brand, price, rating, stock, description, image, category } = product;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 lg:gap-6">
            <div>
                <Image width={500} height={500} src={image} alt={name} className="w-full h-auto aspect-square object-cover rounded-3xl shadow-sm" priority />
            </div>
            <div className="space-y-5">
                <span className="py-1 px-4 rounded-full text-sm bg-orange-200 text-[#fd7933] font-medium">
                    {category}
                </span>
                <div className="space-y-5">
                    <p className="text-[#52657a] text-xs uppercase font-normal mt-5">{brand}</p>
                    <h3 className="text-[#0C2842] font-bold text-3xl xl:text-5xl">{name}</h3>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                        <div className="flex items-center font-medium gap-1">
                            <FaStar className="text-[#fd7933]" />
                            <span className="font-medium">{rating}</span>
                        </div>
                        <span className="text-muted-foreground">· {stock} in stock</span>
                    </div>
                    <p className="text-[#52657a]">{description}</p>
                </div>
                <h1 className="text-[#fd7933] font-bold text-3xl md:text-4xl xl:text-5xl">${price.toFixed(2)}</h1>
                <div className="flex gap-3">
                    <Button as="link" href={`/products/${id}`} className={'px-5'} text={'Add to Cart'} leftIcon={<LuShoppingBag />} size="md" animated animatedSpanOne={'animate-ping'} />
                    <Button text={'save'} size="md" variant="ghost" className={'bg-white shadow-xs px-5'} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;