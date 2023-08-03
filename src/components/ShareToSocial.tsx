import { config } from "@common/appconfig";
import share from "@common/share";
import { useRouter } from "next/router";
import { useState } from "react";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { DiHackernews } from "react-icons/di";
import { FaCreativeCommonsShare, FaShareAlt } from "react-icons/fa";
import { FcReddit } from "react-icons/fc";
import { styled } from "styled-components";
import Modal from "styled-react-modal";

const SharingContainer = styled.div`
    margin-top: 2rem;

    span {
        padding-right: 1rem;
        font-size: 2.6rem;
        height: 2.2rem;
    }

    a {
        padding: 1rem 0 1rem var(--space-md);
        font-weight: var(--font-medium);
        display: block;
        display: flex;
        align-items: center;
        width: 100%;
        &:hover {
            background-color: var(--color-primary-600);
        }
    }
    h4 {
        padding-left: var(--space-md);
        margin-bottom: var(--space-sm);
        > span {
            position: relative;
            top: 5px;
            font-size: 2.6rem;
        }
    }
`;

const StyledModal = Modal.styled`
    z-index: 100;
    width: 30rem;
    height: 35rem;
    background-color: #050e4f;
    border-radius: 8px;
    box-shadow: 0 0 0 1px var(--color-secondary-700);
`;

const ShareIcon = styled.span`
    cursor: pointer;
    font-size: 2.2rem;
`;

export default function ShareToSocialLink({ title }) {
    const router = useRouter();
    const url = `${config.siteUrl}${router.asPath}`;

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = e => {
        setIsOpen(!isOpen);
    };

    return (
        <button style={{ boxShadow: "none", border: "none", outline: "none" }}>
            <ShareIcon>
                <FaShareAlt onClick={toggleModal} />
            </ShareIcon>
            <StyledModal
                isOpen={isOpen}
                onEscapeKeydown={toggleModal}
                onBackgroundClick={toggleModal}
                role="dialog"
                aria-modal={true}
                aria-labelledby="modal-label"
            >
                <SharingContainer>
                    <h4>
                        <span>
                            <FaCreativeCommonsShare />
                        </span>
                        Share on socials
                    </h4>
                    <a href={share.toTwitter(url, title)}>
                        <span>
                            <CiTwitter />
                        </span>
                        Share to Twitter
                    </a>
                    <a href={share.toLinkedIn(url)}>
                        <span>
                            <CiLinkedin />
                        </span>
                        Share to LinkedIn
                    </a>
                    <a href={share.toReddit(url, title)}>
                        <span>
                            <FcReddit />
                        </span>
                        Share to Reddit
                    </a>

                    <a href={share.toHackerNews(url, title)}>
                        <span>
                            <DiHackernews />
                        </span>
                        Share to Hacker News
                    </a>

                    <a href={share.toFacebook(url)}>
                        <span>
                            <CiFacebook />
                        </span>
                        Share to Facebook
                    </a>
                </SharingContainer>
            </StyledModal>
        </button>
    );
}
