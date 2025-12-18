"use client";

import type { ReactProps } from "src/types/types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";



const Layout: React.FC<ReactProps> = ({ children }) => {


    return (
        <div className="min-h-screen">
            <div className="w-full max-w-[850px] mx-auto! px-10! max-sm:px-8!">
                <Header />
                <div className="mt-24 pb-20 max-sm:mt-16">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
