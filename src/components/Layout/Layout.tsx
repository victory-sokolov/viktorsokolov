"use client";

import type { ReactProps } from "src/types/types";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const variants = {
    hidden: { opacity: 0, x: -150, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const Layout: React.FC<ReactProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <div className="min-h-screen">
            <div className="max-w-screen-sm mx-auto px-16 max-sm:px-8">
                <Header />
                <div className="mt-24 pb-20 max-sm:mt-16">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
