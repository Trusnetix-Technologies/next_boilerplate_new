import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
