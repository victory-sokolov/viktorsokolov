"use client";

import type { ReactProps } from "src/types/types";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout: React.FC<ReactProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="page-shell">
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
