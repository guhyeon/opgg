import React, { FC, ReactNode } from 'react';
import HeaderComponent from '../header/HeaderComponent';
import style from './Layout.module.css'

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
      <div className={style.contentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
