import Link from "next/link";

export const H1 = ({ id, children, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h1 id={id} {...rest} className="anchor">
                {children}
            </h1>
        </Link>
    );
};

export const H2 = ({ id, children, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h2 id={id} {...rest} className="anchor">
                {children}
            </h2>
        </Link>
    );
};

export const H3 = ({ id, children, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h3 id={id} {...rest} className="anchor">
                {children}
            </h3>
        </Link>
    );
};

export const H4 = ({ id, children, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h4 id={id} {...rest} className="anchor">
                {children}
            </h4>
        </Link>
    );
};

export const H5 = ({ id, children, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h5 id={id} {...rest} className="anchor">
                {children}
            </h5>
        </Link>
    );
};

export const H6 = ({ id, children, ...rest }) => {
    return (
        <Link href={`#${id}`}>
            <h6 id={id} {...rest} className="anchor">
                {children}
            </h6>
        </Link>
    );
};
