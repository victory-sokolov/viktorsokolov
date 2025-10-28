"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import ThemeToggle from "@/components/ThemeToggle";

type Props = {
    isSticky: boolean;
};

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About", prefetch: false },
    { href: "/uses", label: "Uses", prefetch: false },
    { href: "/tips", label: "Tips" },
];

export const Nav: React.FC<Props> = ({ isSticky }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="z-10 w-full">
            {/* Hamburger Menu - Mobile Only */}
            <div
                className={`max-sm:flex hidden fixed top-4 z-50 w-16 h-16 bg-gradient-to-r from-[#3560c5] to-[#6216d8] items-center justify-center cursor-pointer rounded transition-all duration-300 ${
                    isSticky ? "right-4" : "-right-20"
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`relative w-6 h-[2px] bg-white transition-all duration-400 before:content-[''] before:absolute before:z-10 before:-top-2 before:w-6 before:h-[2px] before:bg-white before:transition-all before:duration-400 after:content-[''] after:absolute after:z-10 after:top-2 after:w-6 after:h-[2px] after:bg-white after:transition-all after:duration-400 ${isOpen ? "rotate-45 before:top-0 before:rotate-90 after:top-0 after:-rotate-90" : "rotate-0"}`}
                />
            </div>

            {/* Menu */}
            <div
                className={`max-sm:fixed max-sm:inset-0 max-sm:z-40 max-sm:w-full max-sm:min-h-screen max-sm:flex max-sm:items-center max-sm:justify-center transition-all duration-300 ${
                    isOpen
                        ? "max-sm:visible max-sm:opacity-100"
                        : "max-sm:invisible max-sm:opacity-0"
                }`}
            >
                <div
                    className={`max-sm:bg-[rgba(9,13,32,0.95)] max-sm:w-full max-sm:h-full max-sm:flex max-sm:items-center max-sm:justify-center max-sm:backdrop-blur-md max-sm:transition-all max-sm:duration-400 ${
                        isOpen ? "max-sm:scale-100" : "max-sm:scale-95"
                    }`}
                >
                    <div
                        className={`max-sm:text-center max-sm:max-w-[90vw] transition-opacity duration-300 ${isOpen ? "max-sm:opacity-100" : "max-sm:opacity-0"}`}
                    >
                        <ul className="p-0 flex items-center gap-8 max-sm:flex-col max-sm:gap-8">
                            {navLinks.map(({ href, label, prefetch }) => (
                                <li
                                    key={href}
                                    onClick={() => setIsOpen(false)}
                                    className="inline-block max-sm:py-4"
                                >
                                    <Link
                                        href={href}
                                        data-hover={label}
                                        aria-label={`${label} page`}
                                        prefetch={prefetch}
                                        className={`text-[1.8rem] font-medium tracking-wide relative px-2 py-3 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 max-sm:text-2xl ${
                                            pathname === href ? "active before:scale-x-100" : ""
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li className="inline-block max-sm:py-4 max-sm:mt-4">
                                <ThemeToggle />
                            </li>
                        </ul>
                        {isSticky && !isOpen && <ScrollIndicator />}
                    </div>
                </div>
            </div>
        </nav>
    );
};
