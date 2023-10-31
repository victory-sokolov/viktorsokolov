/* eslint-disable react/prop-types */
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Blockquote } from "./Blockquote";
import { Code } from "./code";
import { H1, H2, H3, H4, H5, H6 } from "./Heading";
import { TechStackList } from "./TechStackList";

const CustomLink = ({ href, children }) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="mdx-link">
            {children}
        </Link>
    );
};

const MdxImg: React.FC<ImageProps> = ({ src, width, height, alt, blurDataURL, ...prop }) => {
    const pathname = usePathname();
    const blogPostUrl = pathname.replace("/post", "posts");
    const imgSrc = `${blogPostUrl}/${src}`;

    const props = {
        loading: "lazy",
        src: imgSrc,
        height: height || "500",
        width: width || "700",
        blurDataURL,
        placeholder: blurDataURL ? "blur" : "empty",
        ...prop
    } as const;

    return <Image alt={alt} {...props} />;
};

const Ul = ({ children }) => {
    return <ul style={{ paddingLeft: "3.5rem", paddingBottom: "2rem" }}>{children}</ul>;
};

const paragraph = ({ children }) => {
    return <p style={{ paddingBottom: "2rem" }}>{children}</p>;
};

const MDXComponents = {
    img: MdxImg,
    pre: Code,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    a: CustomLink,
    ul: Ul,
    p: paragraph,
    TechStackList,
    Blockquote
} as any;

export default MDXComponents;
