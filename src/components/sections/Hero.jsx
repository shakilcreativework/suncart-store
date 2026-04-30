
import { FaMagic } from "react-icons/fa";
import Button from "../ui/Button";
import Container from "../shared/Container";
import { LuShoppingBag } from "react-icons/lu";
import { BsFire, BsGift } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="bg-linear-to-br from-amber-300 via-orange-400 to-sky-400 relative text-white py-20 text-center">
            {/* Overlay */}
            <span className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none z-0"></span>

            <Container>
                {/* Content */}
                {/* <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4">Summer Sale 50% OFF ☀️</h1>
                <p className="mb-6">Hot Deals 🔥 on all essentials</p>
                <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                    Shop Now
                </button>

            </div> */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 z-10 justify-center items-center">
                    <div className="flex flex-col md:text-start space-y-5">
                        <div>
                            <Button text={'NEW SUMMER COLLECTION'} className={'uppercase bg-gray-100 text-[#fd7933] py-1'} leftIcon={<FaMagic />} />
                        </div>
                        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0c2842]">Summer Sale <br className="hidden lg:block" /><span className="">50% OFF</span></h1>
                        <p className="text-slate-700 text-base md:text-lg">Shades, sunscreen, snorkels, and more. Everything you <br className="hidden lg:block" />need to chase the sun — in one cart.</p>
                        <div className="flex gap-2 mx-auto md:mx-0">
                            <Button text={'Shop Now'} leftIcon={<LuShoppingBag />} animated animatedSpanOne={'animate-ping'} className={'text-white'} />
                            <Button text={'Hot Deals'} leftIcon={<BsFire className="text-[#fd7933]" />} className={'text-slate-800 bg-white'} />
                        </div>
                    </div>
                    <div className="relative rounded-2xl bg-linear-to-br from-amber-300 via-orange-400 to-sky-400 p-2">
                            <Image width={500} height={400} className="w-full rounded-2xl " src={'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80'} alt="Beach" priority />
                            <div className="absolute bottom-6 left-6 lg:-bottom-9 lg:-left-24 bg-white rounded-xl flex gap-2 p-5 text-start justify-center items-center text-[#0C2842] shadow-md">
                                <div>
                                    <Image width={40} height={40} src={'https://i.ibb.co.com/gB4p9S1/box.png'} alt="Gift with discount" />
                                </div>
                                <div>
                                    <span className="text-sm font-normal">Free shipping</span>
                                    <h3 className="font-bold text-base">on orders $50+</h3>
                                </div>
                            </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;