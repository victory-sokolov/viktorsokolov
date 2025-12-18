"use client";

import type { ReactProps } from "src/types/types";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout: React.FC<ReactProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <div className="mx-auto! w-full max-w-[850px] px-10! max-sm:px-8!">
                <Header />
                <div className="mt-[6rem] pb-20 max-sm:mt-16">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
