import { Code } from "./code";
import Image from "next/image";
import { H1, H2, H3, H4, H5, H6 } from "./Heading";
import Link from "next/link";
import styled from "styled-components";
import { TechStackList } from "./TechStackList";

interface MdxImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    blurDataURL?: string;
}

const CustomStyledLink = styled(Link)`
    color: var(--color-secondary);
    &:hover {
        color: var(--color-secondary-600);
        text-decoration: underline;
    }
`;

const CustomLink = ({ href, children }) => {
    return (
        <CustomStyledLink href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </CustomStyledLink>
    );
};

const MdxImg: React.FC<MdxImgProps> = ({ src, width, height, alt, blurDataURL, ...prop }) => {
    const props: any = {
        layout: "responsive",
        loading: "lazy",
        src: src,
        height: height,
        width: width,
        blurDataURL,
        placeholder: blurDataURL ? "blur" : "empty",
        ...prop
    } as const;

    return (
        <div className="image-wrapper">
            <Image alt={alt} {...props} />;
        </div>
    );
};

const Ul = ({ children }) => {
    return <ul style={{ paddingLeft: "3rem" }}>{children}</ul>;
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
    TechStackList: TechStackList
};

export default MDXComponents;
