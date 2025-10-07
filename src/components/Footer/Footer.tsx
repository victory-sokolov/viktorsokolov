import Link from "next/link";
import { config } from "@/common/appconfig";
import SocialMedia from "@/components/Social";
import { FooterStyles } from "./Footer.styled";

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
