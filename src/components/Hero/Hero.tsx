import React from "react";

import { HeroStyles } from "./Hero.styled";

export const Hero: React.FC = () => {
    return (
        <HeroStyles>
            <h1 itemProp="headline">
                Hi! I&apos;m Viktor.
                <span className="wavy">👋</span>
            </h1>
            <p>
                I’m a Software Engineer mainly working with Python, Node, TypeScript and React. In a past worked as a
                Freelancer, developed various automation scripts for E-commerce sites. I have a big passion for Software
                development
            </p>
        </HeroStyles>
    );
};
