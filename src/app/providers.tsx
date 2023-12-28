import { GlobalStyles } from "@/styles/global-styles";
import { PropsWithChildren } from "react";

function Providers({ children }: PropsWithChildren) {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    );
}

export default Providers;
