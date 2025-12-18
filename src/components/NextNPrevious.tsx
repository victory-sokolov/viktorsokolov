"use client";

import { capitalize } from "@vsokolov/utils";
import Link from "next/link";

const NextNPrevious = ({ next, prev, postType }) => {
    return (
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col">
            {prev && (
                <Link href={`/${postType}/${prev.slug}`} className="ml-auto">
                    <div className="hover:bg-(rgb(var(--color-secondary-700))) h-full w-120 rounded-lg border border-[#424f9e] p-4 transition-colors hover:text-white [&_p]:m-0 [&_p]:p-0">
                        <p>
                            ⇠ Previous
                            {postType}
                        </p>
                        {prev.title}
                    </div>
                </Link>
            )}

            {next && (
                <Link href={`/${postType}/${next.slug}`} className="mr-auto">
                    <div className="hover:bg-(rgb(var(--color-secondary-700))) h-full w-120 rounded-lg border border-[#424f9e] p-4 transition-colors hover:text-white [&_p]:m-0 [&_p]:p-0">
                        <p>{`Next ${capitalize(postType).slice(0, -1)} ⇢`}</p>
                        {next.title}
                    </div>
                </Link>
            )}
        </div>
    );
};

export default NextNPrevious;
