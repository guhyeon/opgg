import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import AppProvider from '../libs/providers/AppProvider'
import { useRootStore } from '../libs/providers/RootStoreProvider';

function MyApp({ Component, pageProps }: AppProps) {

  const rootStore = useRootStore(pageProps.initialStore);
  return (
    <AppProvider rootStore={rootStore}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp
