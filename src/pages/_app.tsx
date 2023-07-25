import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";

import Layout from "../components/Layout/Layout";
import "../styles/global-styles";

function App({ Component, pageProps }) {
    return (
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
            <Layout>
                <Component {...pageProps} />
                <Analytics />
            </Layout>
        </AnimatePresence>
    );
}

export default App;
