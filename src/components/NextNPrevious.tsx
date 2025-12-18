"use client";

import { capitalize } from "@vsokolov/utils";
import Link from "next/link";

const NextNPrevious = ({ next, prev, postType }) => {
    return (
        <div className="flex justify-between gap-8 mt-10 max-sm:flex-col">
            {prev && (
                <Link href={`/${postType}/${prev.slug}`} className="ml-auto">
                    <div className="border border-[#424f9e] rounded-lg p-4 w-[30rem] h-full hover:bg-(rgb(var(--color-secondary-700))) hover:text-white transition-colors [&_p]:p-0 [&_p]:m-0">
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
                    <div className="border border-[#424f9e] rounded-lg p-4 w-[30rem] h-full hover:bg-(rgb(var(--color-secondary-700))) hover:text-white transition-colors [&_p]:p-0 [&_p]:m-0">
                        <p>{`Next ${capitalize(postType).slice(0, -1)} ⇢`}</p>
                        {next.title}
                    </div>
                </Link>
            )}
        </div>
    );
};

export default NextNPrevious;
