
"use client";

import Link from "next/link";
import Container from "./Container";
import Button from "../ui/Button";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import Logo from "../ui/Logo";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Avatar } from "@heroui/react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const { data: session } = authClient.useSession();

    // active link
    const isActive = (path) => pathname === path;

    // mobile menu toggle
    const handleMenu = () => {
        setOpen(!open);
    };

    // sign out
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    };

    return (
        <div>
            <div className="fixed top-0 w-full z-50 py-2.5 backdrop-blur-md bg-[#FFF7ED]/90 shadow-xs">
                <nav>
                    <Container>
                        <div className="flex justify-between items-center w-full">

                            {/* Logo */}
                            <Logo />

                            {/* Desktop Menu */}
                            <ul className="hidden lg:flex gap-4 lg:gap-6 items-center">
                                <li>
                                    <Link className={`font-medium text-sm hover:text-[#fd7933] transition-all duration-300 ${isActive('/') && 'text-[#fd7933]'}`} href="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link className={`font-medium text-sm hover:text-[#fd7933] transition-all duration-300 ${isActive('/products') && 'text-[#fd7933]'}`} href="/products">
                                        Products
                                    </Link>
                                </li>

                                {session?.user && (
                                    <li>
                                        <Link className={`font-medium text-sm hover:text-[#fd7933] transition-all duration-300 ${isActive('/profile') && 'text-[#fd7933]'}`} href="/profile">
                                            My Profile
                                        </Link>
                                    </li>
                                )}
                            </ul>

                            {/* Mobile Menu */}
                            <ul
                                className={`absolute lg:hidden w-full left-0 top-full bg-[#FFF7ED] px-4 py-6 flex flex-col
                                transform transition-all duration-300 ease-in-out space-y-3.5
                                ${open
                                        ? "translate-y-0 opacity-100"
                                        : "-translate-y-4 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <li>
                                    <Link onClick={() => setOpen(false)} className={`font-medium text-sm hover:text-[#fd7933] ${isActive('/') && 'text-[#fd7933]'}`} href="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link onClick={() => setOpen(false)} className={`font-medium text-sm hover:text-[#fd7933] ${isActive('/products') && 'text-[#fd7933]'}`} href="/products">
                                        Products
                                    </Link>
                                </li>

                                <li>
                                    <Link onClick={() => setOpen(false)} className={`font-medium text-sm hover:text-[#fd7933] ${isActive('/profile') && 'text-[#fd7933]'}`} href="/profile">
                                        My Profile
                                    </Link>
                                </li>

                                {!session && <div className="flex justify-center md:hidden mt-2 gap-2">
                                    <Button size="sm" onClick={() => setOpen(false)} as="link" href={'/login'} className={' px-5 lg:px-6 xl:px-7'} leftIcon={<FiLogIn />} variant="outline" text={'Login'} />
                                    <Button size="sm" onClick={() => setOpen(false)} as="link" href={'/register'} className={' px-5 lg:px-6 xl:px-7'} leftIcon={<FiLogIn />} animated animatedSpanOne={'animate-ping'} text={'Register'} />
                                </div>}

                            </ul>

                            {/* Right Side */}
                            <div className="flex items-center gap-2 sm:gap-4">

                                {session?.user ? (
                                    <div className="flex gap-1 sm:gap-2 items-center">

                                        {/* Avatar */}
                                        <div className="border-2 border-orange-300 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                                            {session.user.image ? (
                                                <Image
                                                    src={session.user.image}
                                                    alt="avatar"
                                                    width={40}
                                                    height={40}
                                                    priority
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <Avatar className="w-full h-full">
                                                    <Avatar.Image
                                                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                                        alt="avatar"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <Avatar.Fallback className="flex items-center justify-center text-sm font-semibold">
                                                        JD
                                                    </Avatar.Fallback>
                                                </Avatar>
                                            )}
                                        </div>

                                        {/* Logout */}
                                        <Button
                                            size="sm"
                                            onClick={handleSignOut} // ✅ fixed
                                            className="md:px-5 lg:px-6 xl:px-7"
                                            leftIcon={<MdLogout />}
                                            variant="ghost"
                                            text="Logout"
                                        />

                                    </div>
                                ) : (
                                    <div className="hidden md:block">
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                as="link"
                                                href="/login"
                                                className="md:px-5 lg:px-6 xl:px-7"
                                                leftIcon={<FiLogIn />}
                                                variant="outline"
                                                text="Login"
                                            />
                                            <Button
                                                size="sm"
                                                as="link"
                                                href="/register"
                                                className="md:px-5 lg:px-6 xl:px-7"
                                                leftIcon={<FiLogIn />}
                                                animated
                                                animatedSpanOne="animate-ping"
                                                text="Register"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Mobile Toggle */}
                                <div
                                    onClick={handleMenu}
                                    className="block lg:hidden rounded-full hover:bg-white text-[#1F1B16] hover:text-[#E07A5F] p-2 transition-colors duration-200"
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