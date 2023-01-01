import Link from "next/link";

import { FooterStyles } from "./Footer.styled";
import SocialMedia from "@components/Social";

export const Footer: React.FC = () => {
    return (
        <FooterStyles>
            <div className="footer-content">
                <Link href="/" aria-label="Home">
                    VictorySokolov.dev
                </Link>
                <SocialMedia />
                <p>&copy; {new Date().getFullYear()}. Developed by Viktor Sokolov</p>
            </div>
        </FooterStyles>
    );
};
