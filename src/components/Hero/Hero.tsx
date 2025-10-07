import React from "react";

import SocialMedia from "@/components/Social";
import { HeroStyles } from "./Hero.styled";

export const Hero: React.FC = () => {
    return (
        <HeroStyles>
            <h1 itemProp="headline">
                Hi! I&apos;m Viktor.
                <span className="wavy">👋</span>
            </h1>
            <p>
                I’m a Software Engineer mainly working with Python, Node, TypeScript and React.
                Sharing my learnings and building prodcuts in public.
            </p>
            <p>Follow me on other platforms:</p>
            <SocialMedia size={24} />
        </HeroStyles>
    );
};
