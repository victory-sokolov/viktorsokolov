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
        <nav className="z-10 mx-auto max-w-212.5">
            {/* Hamburger Menu - Mobile Only */}
            <div
                className={`fixed top-4 z-50 hidden h-16 w-16 cursor-pointer items-center justify-center rounded bg-linear-to-r from-[#3560c5] to-[#6216d8] transition-all duration-300 max-sm:flex ${
                    isSticky ? "right-4" : "-right-20"
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`relative h-[2px] w-6 bg-white transition-all duration-400 before:absolute before:-top-2 before:z-10 before:h-[2px] before:w-6 before:bg-white before:transition-all before:duration-400 before:content-[''] after:absolute after:top-2 after:z-10 after:h-[2px] after:w-6 after:bg-white after:transition-all after:duration-400 after:content-[''] ${isOpen ? "rotate-45 before:top-0 before:rotate-90 after:top-0 after:-rotate-90" : "rotate-0"}`}
                />
            </div>

            {/* Menu */}
            <div
                className={`transition-all duration-300 max-sm:fixed max-sm:inset-0 max-sm:z-40 max-sm:flex max-sm:min-h-screen max-sm:w-full max-sm:items-center max-sm:justify-center ${
                    isOpen
                        ? "max-sm:visible max-sm:opacity-100"
                        : "max-sm:invisible max-sm:opacity-0"
                }`}
            >
                <div
                    className={`max-sm:flex max-sm:h-full max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:bg-[rgba(9,13,32,0.95)] max-sm:backdrop-blur-md max-sm:transition-all max-sm:duration-400 ${
                        isOpen ? "max-sm:scale-100" : "max-sm:scale-95"
                    }`}
                >
                    <div
                        className={`transition-opacity duration-300 max-sm:max-w-[90vw] max-sm:text-center ${isOpen ? "max-sm:opacity-100" : "max-sm:opacity-0"}`}
                    >
                        <ul className="flex items-center gap-8 p-0 max-sm:flex-col max-sm:gap-8">
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
                                        className={`relative px-2 py-3 text-[1.8rem] font-medium tracking-wide before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[rgb(var(--color-secondary-600))] before:transition-transform before:duration-300 hover:before:scale-x-100 max-sm:text-2xl ${
                                            pathname === href ? "active before:scale-x-100" : ""
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li className="inline-block max-sm:mt-4 max-sm:py-4">
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {isSticky && !isOpen && <ScrollIndicator />}
        </nav>
    );
};
