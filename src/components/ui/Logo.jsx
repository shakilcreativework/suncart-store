import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { IoIosSunny } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

const Logo = ({ className, cartClassName }) => {

    // cart style
    const cartStyles = twMerge(
        clsx(
            `text-[#fd7933] ${cartClassName}`
        )
    );


    // base style
    const baseStyles = twMerge(
        clsx(
            "text-[#0c2842] font-bold text-xl",
            className
        )
    );

    return (
        <div>
            <Link href={'/'}>
                <div className="flex items-center justify-center gap-2">
                    <div className="bg-linear-to-br from-amber-300 via-orange-400 to-sky-400 w-10 h-10 flex items-center justify-center rounded-full text-white">
                        <IoIosSunny className="text-3xl" />
                    </div>
                    <span className={baseStyles}>Sun<span className={cartStyles}>Cart</span></span>
                </div>
            </Link>
        </div>
    );
};

export default Logo;