"use client";

import { NextPage } from "next";
import Link from "next/link";

const PageNotFound: NextPage = () => {
    return (
        <>
            <h1 style={{ marginBottom: "3rem" }}>Page Not Found</h1>
            <Link href="/">Return to Home</Link>
        </>
    );
};
export default PageNotFound;
