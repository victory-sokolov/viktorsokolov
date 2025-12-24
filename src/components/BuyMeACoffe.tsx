"use client";

import Image from "next/image";

export const BuyMeACoffe = () => {
    return (
        <div className="mt-4">
            <a
                href="https://www.buymeacoffee.com/viktorsokolov"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buy Me A Coffee"
            >
                <Image
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    height={50}
                    width={200}
                />
            </a>
        </div>
    );
};
