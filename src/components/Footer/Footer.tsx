import Link from "next/link";
import { config } from "@/common/appconfig";
import SocialMedia from "@/components/Social";

export const Footer: React.FC = () => {
    return (
        <footer className="text-center mt-24 pt-16 pb-8 border-t border-[rgba(52,51,51,0.3)] max-sm:mt-16">
            <Link
                href="/"
                aria-label="Home"
                className="text-white uppercase tracking-wider font-bold text-lg hover:text-[rgb(var(--color-secondary))] transition-colors inline-block mb-6"
            >
                {config.siteName}
                .com
            </Link>
            <div className="my-6">
                <SocialMedia />
            </div>
            <p className="text-base opacity-80">
                &copy;
                {" "}
                {new Date().getFullYear()}
                . Developed by
                {" "}
                {config.author}
            </p>
        </footer>
    );
};
