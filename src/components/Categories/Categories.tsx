"use client";

import { TagsMapping } from "../Post/PostLabels";

export const Categories = ({ categories, style }: { categories: string[]; style?: object }) => {
    return (
        <div className="text-center [&_span]:rounded-[5px]" style={style}>
            {categories
                .map((category: string) => category.trim().toLowerCase())
                .map((category: string) =>
                    TagsMapping[category] ? (
                        <div key={category} className="inline-block pb-2 not-first:ml-4">
                            {TagsMapping[category]()}
                        </div>
                    ) : null,
                )}
        </div>
    );
};
