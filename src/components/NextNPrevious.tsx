"use client";

import type { Route } from "next";
import type { PostType } from "src/types/Post";
import type { POST_TYPE } from "src/types/enums";
import { capitalize } from "@vsokolov/utils";
import Link from "next/link";

type NextNPreviousProps = {
    next: PostType | null;
    prev: PostType | null;
    postType: POST_TYPE;
};

const NextNPrevious = ({ next, prev, postType }: NextNPreviousProps) => {
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
