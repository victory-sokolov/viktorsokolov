import React from "react";
import SocialMedia from "@/components/Social";

export const Hero: React.FC = () => {
    return (
        <section className="py-12 pb-12 max-sm:py-12 max-sm:pb-12">
            <h1 itemProp="headline" className="mb-6 text-4xl max-sm:text-3xl">
                Hi! I&apos;m Viktor.
                <span className="wavy ml-2">👋</span>
            </h1>
            <p className="lead-relaxed mb-6">
                I'm a Software Engineer mainly working with Python, Node, TypeScript and React.
                Sharing my learnings and building prodcuts in public.
            </p>
            <p className="lead mb-6">
                Follow me on other platforms:
            </p>
            <SocialMedia size={24} />
        </section>
    );
};
