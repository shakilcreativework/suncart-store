import React from 'react';
import clsx from "clsx";
import { twMerge } from 'tailwind-merge';

const Container = ({children, className}) => {
    return (
        <div className={twMerge(clsx("max-w-350 mx-auto px-4 md:px-5 lg:px-6 xl:px-0", className))}>
            {children}
        </div>
    );
};

export default Container;