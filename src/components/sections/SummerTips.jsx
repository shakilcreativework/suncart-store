import Image from "next/image";
import Container from "../shared/Container";
import SectionTitle from "../ui/SectionTitle";

const SummerTips = () => {
    return (
        <div className="py-20">
            <Container>
                <div className="animate__animated animate__slideInUp text-center">
                    <SectionTitle paraTitle={'Top Brands'} HeadingTitle={'Curated from the best'} />
                </div>
                <div className="animate__animated animate__slideInUp my-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-6">
                    <div className="text-center bg-white rounded-3xl p-5 shadow-xs space-y-2">
                        <div className="w-10 h-10 mx-auto">
                            <Image src={'https://i.ibb.co.com/Q7XR9J7R/sun-glasses.png'} alt="" width={50} height={50} className="w-full h-full" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#0C2842]">SunRay</h3>
                            <p className="text-[#52657a] text-base font-normal">Eyewear</p>
                        </div>
                    </div>
                    <div className="text-center bg-white rounded-3xl p-5 shadow-xs space-y-2">
                        <div className="w-10 h-10 mx-auto">
                            <Image src={'https://i.ibb.co.com/LX2VcLHs/make-up.png'} alt="" width={50} height={50} className="w-full h-full" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#0C2842]">GlowSafe</h3>
                            <p className="text-[#52657a] text-base font-normal">Skincare</p>
                        </div>
                    </div>
                    <div className="text-center bg-white rounded-3xl p-5 shadow-xs space-y-2">
                        <div className="w-10 h-10 mx-auto">
                            <Image src={'https://i.ibb.co.com/0RQxWJYx/shirt.png'} alt="" width={50} height={50} className="w-full h-full" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#0C2842]">Palmwear</h3>
                            <p className="text-[#52657a] text-base font-normal">Apparel</p>
                        </div>
                    </div>
                    <div className="text-center bg-white rounded-3xl p-5 shadow-xs space-y-2">
                        <div className="w-10 h-10 mx-auto">
                            <Image src={'https://i.ibb.co.com/yFXv5cnX/water.png'} alt="" width={50} height={50} className="w-full h-full" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#0C2842]">ChillFlask</h3>
                            <p className="text-[#52657a] text-base font-normal">Hydration</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SummerTips;