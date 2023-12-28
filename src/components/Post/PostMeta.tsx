"use client";

import React from "react";
import { FaRegCalendarCheck, FaRegClock } from "react-icons/fa";

import { MetaPostWrapper } from "./Post.styled";

type PostMetaInfo = {
    date: string;
    readTime: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

export const PostMeta: React.FC<PostMetaInfo> = ({ date, readTime, children, style }) => {
    return (
        <MetaPostWrapper style={style}>
            <time dateTime={date} itemProp="datePublished" className="flex-center">
                <FaRegCalendarCheck />
                {date}
            </time>
            {readTime && (
                <span className="flex-center">
                    <FaRegClock />
                    {readTime}
                </span>
            )}
            {children}
        </MetaPostWrapper>
    );
};
