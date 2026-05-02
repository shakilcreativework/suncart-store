
"use client";

import Button from "@/components/ui/Button";
import { Mail, User, Pencil } from "lucide-react";
import Image from "next/image";
import { BsFillPencilFill } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function ProfileCard() {
    return (
        <div className="min-h-dvh flex items-center justify-center bg-linear-to-r from-yellow-100 via-orange-100 to-yellow-200 p-4">
            <div className="w-full max-w-2xl rounded-3xl shadow-xl overflow-hidden bg-white">

                {/* Top linear Section */}
                <div className="relative h-32 bg-linear-to-r from-blue-400 via-yellow-300 to-orange-400">

                    {/* Avatar */}
                    <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                        <Image
                            width={36}
                            height={36}
                            priority
                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" // put your image in /public
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="pt-14 pb-6 px-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Md Jakir Hossain
                    </h2>

                    <div className="flex items-center gap-2 text-[#6B7280]">
                        <MdOutlineMarkEmailRead />
                        <span className="text-sm">
                            jakircreativedesign@gmail.com
                        </span>
                    </div>

                    {/* Info Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                        <div className="bg-gray-100 rounded-2xl p-4">
                            <p className="text-xs text-[#6B7280] mb-2">DISPLAY NAME</p>
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                <FiUserCheck />
                                Md Jakir Hossain
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-2xl p-4">
                            <p className="text-xs text-[#6B7280] mb-2">EMAIL</p>
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                <MdOutlineMarkEmailRead />
                                jakircreativedesign@gmail.com
                            </div>
                        </div>

                    </div>

                    {/* Button */}
                    <div className="mt-6">
                        <Button as="link" href={'/update-profile'} text={'Update Profile'} leftIcon={<BsFillPencilFill />} animated animatedSpanOne={'animate-ping'} />
                    </div>
                </div>
            </div>
        </div>
    );
}