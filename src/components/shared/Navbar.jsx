"use client"

import Link from "next/link";
import Container from "./Container";
import { PiShoppingCart } from "react-icons/pi";
import Button from "../ui/Button";
import { CiGift } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSunny } from "react-icons/io";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { GoSignIn } from "react-icons/go";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // isActive function
    const isActive = (path) => pathname === path;

    // menu open and close for small devices
    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className="bg-[#fefaeb] backdrop-blur-md sticky top-0 py-2.5 z-50 shadow-xs">
                <nav className="relative">
                    <Container>
                        <div className="flex justify-between items-center w-full">

                            {/* Logo */}
                            <Link href={'/'}>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="bg-linear-to-br from-amber-300 via-orange-400 to-sky-400 w-10 h-10 flex items-center justify-center rounded-full text-white">
                                        <IoIosSunny className="text-3xl" />
                                    </div>
                                    <span className="text-[#0c2842] font-bold text-xl">Sun<span className="text-[#fd7933]">Cart</span></span>
                                </div>
                            </Link>

                            {/* Desktop Menu */}
                            <ul className="hidden lg:flex gap-4 lg:gap-6 items-center">
                                <li><Link className={`font-medium text-sm hover:text-[#fd7933] ${isActive('/') && 'text-[#fd7933]'}`} href={'/'}>Home</Link></li>
                                <li><Link className={`font-medium text-sm hover:text-[#fd7933] ${isActive('/products') && 'text-[#fd7933]'}`} href={'/products'}>Products</Link></li>
                                <li><Link className={`font-medium text-sm hover:text-[#fd7933] ${isActive('/profile') && 'text-[#fd7933]'}`} href={'/profile'}>My Profile</Link></li>
                            </ul>

                            {/* Mobile Menu */}
                            <ul
                                className={`absolute lg:hidden w-full left-0 top-full bg-[#fefaeb] px-4 py-6 flex flex-col
                                transform transition-all duration-300 ease-in-out space-y-3.5

                                ${open
                                        ? "translate-y-0 opacity-100"
                                        : "-translate-y-4 opacity-0 pointer-events-none"
                                    }`}
                            >

                                <li><Link className="block font-medium text-sm" href={'/'}>Home</Link></li>
                                <li><Link className="block font-medium text-sm" href={'/products'}>Products</Link></li>
                                <li><Link className="block font-medium text-sm" href={'/profile'}>My Profile</Link></li>

                                {/* Free Designs btn for mobile */}
                                <div className="flex justify-center md:hidden mt-2 gap-2">
                                    <Button size="sm" className={' md:px-5 lg:px-6 xl:px-7'} leftIcon={<FiLogIn />} variant="outline" text={'Login'} />
                                    <Button size="sm" className={' md:px-5 lg:px-6 xl:px-7'} rightIcon={<GoSignIn />} animated text={'Register'} />
                                </div>
                            </ul>

                            {/* Icons for desktop */}
                            <div className="flex items-center gap-4">

                                {/* Free Designs btn */}
                                <div className="hidden md:block">
                                    <div className="flex gap-2">
                                        <Button size="sm" className={' md:px-5 lg:px-6 xl:px-7'} leftIcon={<FiLogIn />} variant="outline" text={'Login'} />
                                        <Button size="sm" className={' md:px-5 lg:px-6 xl:px-7'} rightIcon={<GoSignIn />} animated text={'Register'} />
                                    </div>
                                </div>

                                <div
                                    onClick={handleMenu}
                                    className="block lg:hidden rounded-full hover:bg-white text-[#1F1B16] active:text-[#E07A5F] hover:text-[#E07A5F] p-2 transition-colors duration-200"
                                >
                                    <div className="relative w-6 h-6">
                                        <IoClose
                                            className={`absolute text-xl transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                                                }`}
                                        />
                                        <AiOutlineMenu
                                            className={`absolute text-xl transition-all duration-300 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Container>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;