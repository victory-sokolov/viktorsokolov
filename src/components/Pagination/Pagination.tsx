import type { Route } from "next";
import Link from "next/link";
import React from "react";

type PaginationProps = {
    isFirst: boolean;
    isLast: boolean;
    prevPage: Route;
    nextPage: Route;
};

export const Pagination: React.FC<PaginationProps> = ({ isFirst, isLast, prevPage, nextPage }) => {
    return (
        <div className="col-[2/span_12] flex items-center justify-center py-12 max-md:col-[2/span_6]">
            <Link
                href={prevPage}
                aria-disabled={isFirst}
                aria-label="Previous Page"
                className={`mx-8 text-[0.875rem] leading-4.5 font-light no-underline hover:underline focus:underline ${
                    isFirst
                        ? "pointer-events-none cursor-default"
                        : "pointer-events-auto cursor-pointer"
                }`}
            >
                Previous Page
            </Link>
            <Link
                href={nextPage}
                aria-label="Next Page"
                aria-disabled={isLast}
                className={`mx-8 text-[0.875rem] leading-4.5 font-light no-underline hover:underline focus:underline ${
                    isLast
                        ? "pointer-events-none cursor-default opacity-50"
                        : "pointer-events-auto cursor-pointer"
                }`}
            >
                Next Page
            </Link>
        </div>
    );
};
