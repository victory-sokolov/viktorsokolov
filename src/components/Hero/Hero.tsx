import SocialMedia from "@/components/Social";
import React from "react";

export const Hero: React.FC = () => {
    return (
        <section className="py-12 pb-12 max-sm:py-12 max-sm:pb-12">
            <h1 itemProp="headline" className="mb-6 text-4xl max-sm:text-3xl">
                Hi! I&apos;m Viktor.
                <span className="wavy ml-2">👋</span>
            </h1>
            <p className="mb-6 text-[1.8rem] leading-[1.7] max-sm:text-base max-sm:leading-relaxed">
                I'm a Software Engineer mainly working with Python, Node, TypeScript and React.
                Sharing my learnings and building prodcuts in public.
            </p>
            <p className="mb-6 text-[1.8rem] leading-[1.7] max-sm:text-base">
                Follow me on other platforms:
            </p>
            <SocialMedia size={24} />
        </section>
    );
};
