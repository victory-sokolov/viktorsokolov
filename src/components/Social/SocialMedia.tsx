"use client";

import React from "react";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { config } from "@/src/common/appconfig";

type SocialMediaType = {
    color?: string;
    size?: number;
};

export const SocialMedia: React.FC<SocialMediaType> = ({
    color = "--text-color-primary",
    size = 22,
}) => {
    const meta = config;

    return (
        <div className="my-6">
            <ul className="p-0 flex items-center justify-center gap-4 md:gap-6">
                <li className="inline-block hover:opacity-70 transition-opacity">
                    <a
                        href={meta.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <FaTwitter color={`var(${color})`} size={size} />
                    </a>
                </li>
                <li className="inline-block hover:opacity-70 transition-opacity">
                    <a
                        href={meta.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin color={`var(${color})`} size={size} />
                    </a>
                </li>
                <li className="inline-block hover:opacity-70 transition-opacity">
                    <a
                        href={meta.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub color={`var(${color})`} size={size} />
                    </a>
                </li>
                <li className="inline-block hover:opacity-70 transition-opacity">
                    <a
                        href={meta.social.devto}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Devto"
                    >
                        <FaDev color={`var(${color})`} size={size} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export const GithubLink = ({ slug }: { slug: string }) => (
    <a
        href={`https://github.com/victory-sokolov/viktorsokolov/tree/master/content/posts/${slug}/${slug}.mdx`}
        aria-labelledby="Edit this post"
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className="flex justify-center items-center text-[rgb(var(--color-link))] hover:text-[rgb(var(--color-secondary))]">
            <FaGithub />
            <span>Edit this post</span>
        </div>
    </a>
);

export const DevToLink = () => (
    <a
        href="https://dev.to/victorysokolov"
        aria-labelledby="Read on DevTo"
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className="flex justify-center items-center text-[rgb(var(--color-link))] hover:text-[rgb(var(--color-secondary))]">
            <FaDev size={18} />
            <span>Read on DevTo</span>
        </div>
    </a>
);
