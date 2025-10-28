import Link from "next/link";
import React from "react";

type PaginationProps = {
    isFirst: boolean;
    isLast: boolean;
    prevPage: string;
    nextPage: string;
};

export const Pagination: React.FC<PaginationProps> = ({ isFirst, isLast, prevPage, nextPage }) => {
    return (
        <div className="col-[2/span_12] py-12 flex items-center justify-center max-md:col-[2/span_6]">
            <Link
                href={prevPage}
                aria-label="Previous Page"
                className={`text-[0.875rem] leading-[1.125rem] font-light no-underline mx-8 hover:underline focus:underline ${
                    isFirst ? "pointer-events-none cursor-default" : "pointer-events-auto cursor-pointer"
                }`}
            >
                Previous Page
            </Link>
            <Link
                href={nextPage}
                aria-label="Next Page"
                className={`text-[0.875rem] leading-[1.125rem] font-light no-underline mx-8 hover:underline focus:underline ${
                    isLast ? "pointer-events-none cursor-default opacity-50" : "pointer-events-auto cursor-pointer"
                }`}
            >
                Next Page
            </Link>
        </div>
    );
};
