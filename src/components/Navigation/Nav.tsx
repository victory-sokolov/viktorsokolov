"use client";

import { ScrollIndicator } from "@/components/ScrollIndicator";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

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
        <>
            <nav className="relative">
                <div className="page-container px-2 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between gap-4">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-[rgb(var(--color-text-primary))] hover-bg focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 sm:hidden"
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                data-slot="icon"
                                aria-hidden="true"
                                className={`size-6 ${isOpen ? "hidden" : "block"}`}
                            >
                                <path
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                data-slot="icon"
                                aria-hidden="true"
                                className={`size-6 ${isOpen ? "block" : "hidden"}`}
                            >
                                <path
                                    d="M6 18 18 6M6 6l12 12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden sm:flex items-center">
                            <div className="flex space-x-4">
                                {navLinks.map(({ href, label, prefetch }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        prefetch={prefetch}
                                        className={`nav-link ${
                                            pathname === href
                                                ? "nav-link-active"
                                                : "nav-link-inactive hover-bg"
                                        }`}
                                        aria-current={pathname === href ? "page" : undefined}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Theme Toggle */}
                        <div className="flex items-center ml-auto">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="sm:hidden">
                        <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3">
                            {navLinks.map(({ href, label, prefetch }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    prefetch={prefetch}
                                    onClick={() => setIsOpen(false)}
                                    className={`nav-link rounded-md ${
                                        pathname === href
                                            ? "nav-link-active"
                                            : "nav-link-inactive hover-bg"
                                    }`}
                                    aria-current={pathname === href ? "page" : undefined}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {isSticky && !isOpen && <ScrollIndicator />}
        </>
    );
};
