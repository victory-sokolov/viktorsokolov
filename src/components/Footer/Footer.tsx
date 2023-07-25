import { config } from "@common/appconfig";
import SocialMedia from "@components/Social";
import Link from "next/link";

import { FooterStyles } from "./Footer.styled";

export const Footer: React.FC = () => {
    return (
        <FooterStyles>
            <div className="footer-content">
                <Link href="/" aria-label="Home">
                    {config.siteName}.com
                </Link>
                <SocialMedia />
                <p>&copy; {new Date().getFullYear()}. Developed by Viktor Sokolov</p>
            </div>
        </FooterStyles>
    );
};
