import Link from "next/link";
import { config } from "@/common/appconfig";
import SocialMedia from "@/components/Social";

export const Footer: React.FC = () => {
    return (
        <footer className="mt-24 border-t border-[rgba(52,51,51,0.3)] pt-16 pb-8 text-center max-sm:mt-16">
            <Link
                href="/"
                aria-label="Home"
                className="mb-6 inline-block text-lg font-bold tracking-wider text-white uppercase transition-colors hover:text-[rgb(var(--color-secondary))]"
            >
                {config.siteName}
                .com
            </Link>

            <SocialMedia />
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
