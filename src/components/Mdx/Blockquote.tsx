import type { ReactProps } from "src/types/types";
import { BiInfoCircle } from "react-icons/bi";

export const Blockquote = ({ children }: ReactProps) => {
    return (
        <div className="mt-8 flex rounded-md rounded-bl-sm border-l-[3px] border-[rgb(var(--color-secondary-800))] bg-[rgb(var(--color-secondary-900))] p-10 px-12 text-[2.2rem] [&_p]:ml-8">
            <BiInfoCircle size={26} />
            <p>{children}</p>
        </div>
    );
};
