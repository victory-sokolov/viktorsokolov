import Image from "next/image";
import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import type { PostFrontmatter } from "src/types/Post";

type BlurryImageProp = Pick<PostFrontmatter, "blurhash" | "featureImage" | "title">;

export const BlurryImage: React.FC<BlurryImageProp> = ({ featureImage, blurhash, title }) => {
    const [hasPlaceholder, setHasPlaceholder] = useState(true);

    return (
        <div style={{ position: "relative", display: "block", overflow: "hidden", height: "100%" }}>
            {hasPlaceholder && (
                <BlurhashCanvas
                    {...blurhash}
                    punch={1}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                />
            )}
            <Image
                onLoadingComplete={() => setHasPlaceholder(false)}
                src={featureImage}
                alt={title}
                width={800}
                height={400}
                quality={100}
                priority
            />
        </div>
    );
};
