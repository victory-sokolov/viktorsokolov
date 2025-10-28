"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { DiHackernews } from "react-icons/di";
import { FaCreativeCommonsShare, FaShareAlt } from "react-icons/fa";
import { FcReddit } from "react-icons/fc";
import { config } from "@/common/appconfig";
import share from "@/common/share";

export default function ShareToSocialLink({ title }: { title: string }) {
    const pathname = usePathname();
    const url = `${config.siteUrl}${pathname}`;

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button className="shadow-none border-none outline-none">
            <span className="cursor-pointer text-[2.2rem]">
                <FaShareAlt onClick={toggleModal} />
            </span>
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black/50 z-50" onClick={toggleModal} />
                    <div
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-[30rem] h-[35rem] bg-[#050e4f] rounded-lg shadow-[0_0_0_1px_rgb(var(--color-secondary-700))]"
                        role="dialog"
                        aria-modal={true}
                        aria-labelledby="modal-label"
                    >
                        <div className="mt-8">
                            <h4 className="pl-5 mb-3">
                                <span className="relative top-[5px] text-[2.6rem]">
                                    <FaCreativeCommonsShare />
                                </span>
                                Share on socials
                            </h4>
                            <a
                                href={share.toTwitter(url, title)}
                                className="p-4 pl-5 font-medium flex items-center w-full hover:bg-[rgb(var(--color-primary-600))]"
                            >
                                <span className="pr-4 text-[2.6rem] h-[2.2rem]">
                                    <CiTwitter />
                                </span>
                                Share to Twitter
                            </a>
                            <a
                                href={share.toLinkedIn(url)}
                                className="p-4 pl-5 font-medium flex items-center w-full hover:bg-[rgb(var(--color-primary-600))]"
                            >
                                <span className="pr-4 text-[2.6rem] h-[2.2rem]">
                                    <CiLinkedin />
                                </span>
                                Share to LinkedIn
                            </a>
                            <a
                                href={share.toReddit(url, title)}
                                className="p-4 pl-5 font-medium flex items-center w-full hover:bg-[rgb(var(--color-primary-600))]"
                            >
                                <span className="pr-4 text-[2.6rem] h-[2.2rem]">
                                    <FcReddit />
                                </span>
                                Share to Reddit
                            </a>
                            <a
                                href={share.toHackerNews(url, title)}
                                className="p-4 pl-5 font-medium flex items-center w-full hover:bg-[rgb(var(--color-primary-600))]"
                            >
                                <span className="pr-4 text-[2.6rem] h-[2.2rem]">
                                    <DiHackernews />
                                </span>
                                Share to Hacker News
                            </a>
                            <a
                                href={share.toFacebook(url)}
                                className="p-4 pl-5 font-medium flex items-center w-full hover:bg-[rgb(var(--color-primary-600))]"
                            >
                                <span className="pr-4 text-[2.6rem] h-[2.2rem]">
                                    <CiFacebook />
                                </span>
                                Share to Facebook
                            </a>
                        </div>
                    </div>
                </>
            )}
        </button>
    );
}
