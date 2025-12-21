"use client";

import { capitalize } from "@vsokolov/utils";
import Link from "next/link";

const NextNPrevious = ({ next, prev, postType }) => {
    return (
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col">
            {prev && (
                <Link href={`/${postType}/${prev.slug}`} className="ml-auto">
                    <div className="post-nav-card">
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
                    <div className="post-nav-card">
                        <p>{`Next ${capitalize(postType).slice(0, -1)} ⇢`}</p>
                        {next.title}
                    </div>
                </Link>
            )}
        </div>
    );
};

export default NextNPrevious;
