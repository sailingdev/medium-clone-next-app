import type { AppProps } from "next/app";
import { NextPage } from "next";
import { Provider } from "react-redux";
import { ReactElement, ReactNode } from "react";

import { store } from "../store";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}
