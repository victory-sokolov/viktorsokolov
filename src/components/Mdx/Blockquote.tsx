import type { ReactProps } from "src/types/types";
import { BiInfoCircle } from "react-icons/bi";

export const Blockquote = ({ children }: ReactProps) => {
    return (
        <div className="flex bg-[rgb(var(--color-secondary-900))] border-l-[3px] border-[rgb(var(--color-secondary-800))] text-[2.2rem] p-10 px-13 mt-8 rounded-md rounded-bl-sm [&_p]:ml-8">
            <BiInfoCircle size={26} />
            <p>{children}</p>
        </div>
    );
};
