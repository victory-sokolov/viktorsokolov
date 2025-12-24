import Link from "next/link";
import { config } from "@/common/appconfig";
import SocialMedia from "@/components/Social";

export const Footer: React.FC = () => {
    return (
        <footer className="mt-12 pt-16 pb-8 text-center max-sm:mt-16">
            <Link
                href="/"
                className="mb-6 inline-block text-lg font-bold tracking-wider text-[rgb(var(--color-text-primary))] uppercase transition-colors hover:text-[rgb(var(--color-secondary))]"
            >
                {config.siteName}
                .com
            </Link>

            <SocialMedia justify="center" />
            <p className="text-base text-[rgb(var(--color-text-primary))] opacity-90">
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
