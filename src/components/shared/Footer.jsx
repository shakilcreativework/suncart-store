import Link from "next/link";
import Logo from "../ui/Logo";
import Container from "./Container";
import { FaFacebookF, FaRegEnvelope } from "react-icons/fa";
import { MdCall, MdLocationOn } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white/60">
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-3 lg:gap-5">
                        {/* logo */}
                        <div className="flex flex-col items-start space-y-4">
                            <Logo className={'text-white'} />
                            <p className="font-normal text-sm">Your one-stop shop for everything that makes summer feel like summer.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-white">Contact</h3>
                            <ul className="space-y-1">
                                <span className="flex gap-2 items-center">
                                    <FaRegEnvelope className="text-[#fd7933]" />
                                    <p className={`font-normal text-sm `}>hello@suncart.shop</p>
                                </span>
                                <span className="flex gap-2 items-center">
                                    <MdCall className="text-[#fd7933]" />
                                    <p className={`font-normal text-sm `}>+1 (555) 123-4567</p>
                                </span>
                                <span className="flex gap-2 items-center">
                                    <MdLocationOn className="text-[#fd7933]" />
                                    <p className={`font-normal text-sm `}>Miami, FL</p>
                                </span>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
                            <ul className="space-y-1">
                                <li><Link className={`font-normal text-sm hover:text-[#fd7933] transition-all duration-300 `} href={'/'}>Home</Link></li>
                                <li><Link className={`font-normal text-sm hover:text-[#fd7933] transition-all duration-300 `} href={'/products'}>Products</Link></li>
                                <li><Link className={`font-normal text-sm hover:text-[#fd7933] transition-all duration-300 `} href={'/'}>Privacy Policy</Link></li>
                                <li><Link className={`font-normal text-sm hover:text-[#fd7933] transition-all duration-300 `} href={'/'}>Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-white">Follow the Sun</h3>
                            <div className="flex gap-2">
                                <div className=" hover:text-white/70 bg-linear-to-br from-amber-300/80 via-orange-400/80 to-sky-400/80 hover:from-amber-300 hover:via-orange-400 hover:to-sky-400 w-8 h-8 flex items-center justify-center rounded-full text-white">
                                    <LuInstagram className="text-lg" />
                                </div>
                                <div className=" hover:text-white/70 bg-linear-to-br from-amber-300/80 via-orange-400/80 to-sky-400/80 hover:from-amber-300 hover:via-orange-400 hover:to-sky-400 w-8 h-8 flex items-center justify-center rounded-full text-white">
                                    <CiTwitter className="text-lg" />
                                </div>
                                <div className=" hover:text-white/70 bg-linear-to-br from-amber-300/80 via-orange-400/80 to-sky-400/80 hover:from-amber-300 hover:via-orange-400 hover:to-sky-400 w-8 h-8 flex items-center justify-center rounded-full text-white">
                                    <FaFacebookF className="text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;