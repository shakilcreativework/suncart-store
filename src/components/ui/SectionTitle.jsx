import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ paraTitle, HeadingTitle, className, headingClass }) => {
    const HeadingClass = twMerge(
        clsx(
            "text-[#0C2842] font-bold text-2xl lg:text-3xl",
            headingClass
        )
    );

    const baseStyles = twMerge(
        clsx(
            "space-y-2",
            className
        )
    );

    return (
        <div className={baseStyles}>
            <p className="text-[#fd7933] font-semibold text-sm uppercase">{paraTitle}</p>
            <h2 className={HeadingClass}>{HeadingTitle}</h2>
        </div>
    );
};

export default SectionTitle;