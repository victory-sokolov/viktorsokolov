import Link from "next/link";

export const H1 = ({ id, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h1 id={id} {...rest} className="anchor" />
        </Link>
    );
};

export const H2 = ({ id, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h2 id={id} {...rest} className="anchor" />
        </Link>
    );
};

export const H3 = ({ id, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h3 id={id} {...rest} className="anchor" />
        </Link>
    );
};

export const H4 = ({ id, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h4 id={id} {...rest} className="anchor" />
        </Link>
    );
};

export const H5 = ({ id, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h5 id={id} {...rest} className="anchor" />
        </Link>
    );
};

export const H6 = ({ id, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h6 id={id} {...rest} className="anchor" />
        </Link>
    );
};
