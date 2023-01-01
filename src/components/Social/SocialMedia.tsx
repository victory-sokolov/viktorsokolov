import React from "react";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { config } from "../../common/appconfig";

type SocialMediaType = {
    color?: string;
    size?: number;
};

const SocialMedias = styled.div`
    li {
        display: inline-block;
        padding: 0 var(--space-sm);
    }

    li:hover {
        filter: brightness(50%);
    }

    ul {
        padding: 0;
    }
`;

export const SocialMedia: React.FC<SocialMediaType> = ({ color = "--text-color-primary", size = 22 }) => {
    const meta = config;

    return (
        <SocialMedias>
            <ul>
                <li>
                    <a href={meta.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter color={`var(${color})`} size={size} />
                    </a>
                </li>
                <li>
                    <a href={meta.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin color={`var(${color})`} size={size} />
                    </a>
                </li>
                <li>
                    <a href={meta.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub color={`var(${color})`} size={size} />
                    </a>
                </li>
                <li>
                    <a href={meta.social.devto} target="_blank" rel="noopener noreferrer" aria-label="Devto">
                        <FaDev color={`var(${color})`} size={size} />
                    </a>
                </li>
            </ul>
        </SocialMedias>
    );
};
