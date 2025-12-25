import type { Route } from "next";
import Link from "next/link";
import { tagToSlug } from "@/common/content-utils";

export type TagListProps = {
    tags?: string[];
    linkBase?: string;
    className?: string;
};
const TagList = ({ tags = [], linkBase, className = "" }: TagListProps) => {
    const normalizedTags = tags.filter(Boolean);
    if (!normalizedTags.length) return null;

    const containerClass = ["tag-list", className].filter(Boolean).join(" ");

    return (
        <div className={containerClass}>
            {normalizedTags.map(tag => {
                const label = tag.trim().toLowerCase();
                const slug = tagToSlug(tag);
                const tagBadge = (
                    <span className="tag-pill">
                        #
                        {label}
                    </span>
                );

                return linkBase
                    ? (
                            <Link
                                key={slug}
                                href={`${linkBase}/${slug}` as Route}
                                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--color-secondary-400))]"
                                aria-label={`View posts tagged ${label}`}
                            >
                                {tagBadge}
                            </Link>
                        )
                    : (
                            <span key={slug}>{tagBadge}</span>
                        );
            })}
        </div>
    );
};

export default TagList;
