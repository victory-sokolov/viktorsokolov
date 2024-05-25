import Link from "next/link";
import { FooterStyles } from "./Footer.styled";
import { config } from "@/common/appconfig";
import SocialMedia from "@/components/Social";

export const Footer: React.FC = () => {
    return (
        <FooterStyles>
            <div className="footer-content">
                <Link href="/" aria-label="Home">
                    {config.siteName}
                    .com
                </Link>
                <SocialMedia />
                <p>
                    &copy;
                    {" "}
                    {new Date().getFullYear()}
                    . Developed by
                    {" "}
                    {config.author}
                </p>
            </div>
        </FooterStyles>
    );
};
