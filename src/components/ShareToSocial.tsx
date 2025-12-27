"use client";

import { config } from "@/common/appconfig";
import share from "@/common/share";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    FaFacebook,
    FaLinkedin,
    FaRedditAlien,
    FaShareNodes,
    FaXTwitter,
    FaYCombinator,
} from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdArrowForwardIos, MdContentCopy } from "react-icons/md";

export default function ShareToSocialLink({ title }: { title: string }) {
    const pathname = usePathname();
    const url = `${config.siteUrl}${pathname}`;

    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setCopied(false);
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
            setCopied(false);
        }
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleModal}
                className="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-[1.6rem] font-medium text-[rgb(var(--color-link))] shadow-none transition-colors outline-none hover:text-[rgb(var(--color-secondary))]"
                aria-label="Share"
            >
                <FaShareNodes className="text-[2rem]" />
                <span>Share</span>
            </button>

            {isOpen ? (
                <>
                    <div className="share-modal-overlay" onClick={toggleModal} />
                    <div
                        className="share-modal-content"
                        role="dialog"
                        aria-modal={true}
                        aria-labelledby="modal-label"
                    >
                        <button
                            onClick={toggleModal}
                            className="text-text-primary/60 hover:text-text-primary absolute top-4 right-4 z-10 cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10"
                            aria-label="Close modal"
                        >
                            <IoClose className="text-2xl" />
                        </button>

                        <div className="px-6 pt-10 pb-2 text-center">
                            <h2
                                id="modal-label"
                                className="text-text-primary text-3xl font-bold tracking-tight"
                            >
                                Share on socials
                            </h2>
                            <p className="text-text-primary/60 mt-2 text-lg">
                                Share this link with your network
                            </p>
                        </div>

                        <div className="px-6 py-8">
                            <div className="group focus-within:border-accent focus-within:ring-accent/50 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors focus-within:ring-2">
                                <div className="flex-1 overflow-hidden pl-3">
                                    <div className="text-text-primary/60 truncate font-mono text-lg">
                                        {url}
                                    </div>
                                </div>
                                <button
                                    onClick={copyToClipboard}
                                    className="text-text-primary flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-5 py-2.5 text-lg font-medium shadow-sm transition-all hover:bg-white/20 active:scale-95"
                                    title="Copy to clipboard"
                                >
                                    <MdContentCopy className="text-2xl" />
                                    <span>{copied ? "Copied!" : "Copy"}</span>
                                </button>
                            </div>
                        </div>

                        <div className="mb-2 h-px w-full bg-white/5"></div>

                        <div className="px-3 pb-8">
                            <nav className="space-y-2">
                                <a
                                    href={share.toTwitter(url, title)}
                                    className="share-option group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="share-icon-wrapper group-hover:bg-white/20">
                                        <FaXTwitter className="text-3xl text-white" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-2xl font-bold transition-colors group-hover:text-white">
                                            X
                                        </span>
                                        <span className="text-text-primary/60 text-lg">
                                            Share to your feed
                                        </span>
                                    </div>
                                    <div className="share-block-wrapper">
                                        <MdArrowForwardIos className="text-text-primary/40 text-xl" />
                                    </div>
                                </a>

                                <a
                                    href={share.toLinkedIn(url)}
                                    className="share-option group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="share-icon-wrapper bg-blue-500/10 group-hover:bg-blue-500/20">
                                        <FaLinkedin className="text-3xl text-[#0A66C2]" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-2xl font-bold transition-colors group-hover:text-[#0A66C2]">
                                            LinkedIn
                                        </span>
                                        <span className="text-text-primary/60 text-lg">
                                            Share with your network
                                        </span>
                                    </div>
                                    <div className="share-block-wrapper">
                                        <MdArrowForwardIos className="text-text-primary/40 text-xl" />
                                    </div>
                                </a>

                                <a
                                    href={share.toReddit(url, title)}
                                    className="share-option group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="share-icon-wrapper bg-orange-500/10 group-hover:bg-orange-500/20">
                                        <FaRedditAlien className="text-3xl text-[#FF4500]" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-2xl font-bold transition-colors group-hover:text-[#FF4500]">
                                            Reddit
                                        </span>
                                        <span className="text-text-primary/60 text-lg">
                                            Post to a community
                                        </span>
                                    </div>
                                    <div className="share-block-wrapper">
                                        <MdArrowForwardIos className="text-text-primary/40 text-xl" />
                                    </div>
                                </a>

                                <a
                                    href={share.toHackerNews(url, title)}
                                    className="share-option group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="share-icon-wrapper bg-orange-500/10 group-hover:bg-orange-500/20">
                                        <FaYCombinator className="text-3xl text-[#FF6600]" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-2xl font-bold transition-colors group-hover:text-[#FF6600]">
                                            Hacker News
                                        </span>
                                        <span className="text-text-primary/60 text-lg">
                                            Submit a story
                                        </span>
                                    </div>
                                    <div className="share-block-wrapper">
                                        <MdArrowForwardIos className="text-text-primary/40 text-xl" />
                                    </div>
                                </a>

                                <a
                                    href={share.toFacebook(url)}
                                    className="share-option group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="share-icon-wrapper bg-blue-600/10 group-hover:bg-blue-600/20">
                                        <FaFacebook className="text-3xl text-[#1877F2]" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-2xl font-bold transition-colors group-hover:text-[#1877F2]">
                                            Facebook
                                        </span>
                                        <span className="text-text-primary/60 text-lg">
                                            Share to your timeline
                                        </span>
                                    </div>
                                    <div className="share-block-wrapper">
                                        <MdArrowForwardIos className="text-text-primary/40 text-xl" />
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}
