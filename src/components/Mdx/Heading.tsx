import type { Route } from "next";
import Link from "next/link";

const createHeading = (level: number) => ({ id, children, ...rest }) => {
    const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    return (
        <Link href={`#${id}` as Route}>
            <Tag id={id} {...rest} className="anchor">
                {children}
            </Tag>
        </Link>
    );
};

export const H1 = createHeading(1);
export const H2 = createHeading(2);
export const H3 = createHeading(3);
export const H4 = createHeading(4);
export const H5 = createHeading(5);
export const H6 = createHeading(6);
