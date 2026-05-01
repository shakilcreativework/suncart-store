import { MdOutlineSecurity, MdOutlineWaterDrop } from "react-icons/md";
import SectionTitle from "../ui/SectionTitle";
import Container from "../shared/Container";
import { FaRegHeart } from "react-icons/fa";

const TopBrands = () => {
    return (
        <div className="bg-linear-to-b from-[#7bb6cc] via-[#a8c9cf] to-[#e8dfb8] py-20">
            <Container>
                <div className="text-center">
                    <SectionTitle paraTitle={'Summer Care'} HeadingTitle={'Tips to glow all season'} />
                    <p className="text-[#52657a] text-base font-normal mt-3">Small habits, big difference. Here&apos;s how to stay safe under the sun.</p>
                </div>
                <div className=" my-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
                    <div className="bg-white rounded-3xl p-5 shadow-xs space-y-3">
                        <div className=" hover:text-white/70 bg-linear-to-br from-amber-300/80 via-orange-400/80 to-sky-400/80 hover:from-amber-300 hover:via-orange-400 hover:to-sky-400 w-12 h-12 flex items-center justify-center rounded-full text-white">
                            <MdOutlineWaterDrop className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0C2842]">Stay Hydrated</h3>
                        <p className="text-[#52657a] text-base font-normal">Aim for 2.5L of water on hot days. Bring a reusable bottle everywhere.</p>
                    </div>
                    <div className="bg-white rounded-3xl p-5 shadow-xs space-y-3">
                        <div className=" hover:text-white/70 bg-linear-to-br from-amber-300/80 via-orange-400/80 to-sky-400/80 hover:from-amber-300 hover:via-orange-400 hover:to-sky-400 w-12 h-12 flex items-center justify-center rounded-full text-white">
                            <MdOutlineSecurity className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0C2842]">SPF Religiously</h3>
                        <p className="text-[#52657a] text-base font-normal">Reapply broad-spectrum SPF 30+ every 2 hours, even on cloudy days.</p>
                    </div>
                    <div className="bg-white rounded-3xl p-5 shadow-xs space-y-3">
                        <div className=" hover:text-white/70 bg-linear-to-br from-amber-300/80 via-orange-400/80 to-sky-400/80 hover:from-amber-300 hover:via-orange-400 hover:to-sky-400 w-12 h-12 flex items-center justify-center rounded-full text-white">
                            <FaRegHeart className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0C2842]">Cool Skincare</h3>
                        <p className="text-[#52657a] text-base font-normal">Aloe and vitamin C help repair sun-stressed skin overnight.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopBrands;