import { Analytics } from "@vercel/analytics/react";

import Layout from "../components/Layout/Layout";
import "../styles/global-styles";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <Analytics />
        </Layout>
    );
}

export default App;
