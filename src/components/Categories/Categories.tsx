"use client";

import { TagsMapping } from "../Post/PostLabels"


type TagKey = keyof typeof TagsMapping;

export const Categories = ({ categories, style }: { categories: string[]; style?: object }) => {
    return (
        <div className="text-center [&_span]:rounded-[5px]" style={style}>
            {categories
                .map((category: string) => category.trim().toLowerCase())
                .map((category: string) => {
                    const tag = TagsMapping[category as TagKey];
                    return tag
                        ? (
                                <div key={category} className="inline-block pb-2 not-first:ml-4">
                                    {tag()}
                                </div>
                            )
                        : null;
                })}
        </div>
    );
};
