import { ReactElement, useEffect } from "react";
import { NextPage } from "next";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { autoLogin } from "../store/Auth";
import { store } from "../store";
import { useAppDispatch } from "../hooks/store";

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type SocialAppProps = {
  Component: NextPageWithLayout;
  pageProps: any;
};

const SocialApp = ({ Component, pageProps }: SocialAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      dispatch(autoLogin(refreshToken));
    }
  }, []);

  return getLayout(<Component {...pageProps} />);
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <SocialApp Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
