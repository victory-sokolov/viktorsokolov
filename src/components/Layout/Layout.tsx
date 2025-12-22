"use client";

import type { ReactProps } from "src/types/types";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout: React.FC<ReactProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <div className="mx-auto! w-full max-w-212.5 px-10! max-sm:px-8!">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
