import Layout from "../components/Layout/Layout";
import "../styles/global-styles";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
