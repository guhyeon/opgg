import React, { FC, ReactNode } from 'react';
import RootStore from '../../stores/RootStore';
import { RootStoreProvider } from './RootStoreProvider';

interface AppProviderProps {
  rootStore: RootStore;
  children: ReactNode;
}

/**
 * RootWrapper. AppProvider. 앱에 제공하는 프로바이더들을 모아 제공.
 * @param rootStore
 * @constructor
 */
const AppProvider: FC<AppProviderProps> = ({ rootStore, children }) => {
  return (
    <RootStoreProvider rootStore={rootStore}>{children}</RootStoreProvider>
  );
};

export default AppProvider;
