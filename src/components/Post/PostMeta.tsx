"use client";

import React from "react";
import { FaRegCalendarCheck, FaRegClock } from "react-icons/fa";

type PostMetaInfo = {
    date: string;
    readTime: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

export const PostMeta: React.FC<PostMetaInfo> = ({ date, readTime, children, style }) => {
    return (
        <div
            className="flex flex-wrap items-center gap-6 text-[1.6rem] font-medium max-sm:gap-4 max-sm:py-4"
            style={style}
        >
            <time dateTime={date} itemProp="datePublished" className="flex items-center">
                <FaRegCalendarCheck className="mr-2 text-[2rem] max-sm:text-lg" />
                <span>{date}</span>
            </time>
            {readTime && (
                <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[2rem] max-sm:text-lg" />
                    <span>{readTime}</span>
                </span>
            )}
            {children}
        </div>
    );
};
