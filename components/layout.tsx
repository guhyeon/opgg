import React, { FC, ReactNode } from 'react';
import HeaderComponent from '../components/header/HeaderComponent';
import HeaderContentsComponent from '../components/headerContents/HeaderContentsComponent';
import RankComponent from '../components/leagues/RankComponent';
import MatchesStatusComponent from '../components/matches/MatchesStatusComponent';
import WinRateComponent from '../components/winRate/WinRateComponent';
import style from './layout.module.css';

interface LayoutProps {
  children?: ReactNode;
}

/**
 * 레이아웃 페이지
 * @param param0
 * @returns
 */
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default Layout;
