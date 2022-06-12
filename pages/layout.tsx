import React, { FC, ReactNode } from 'react';
import HeaderComponent from '../components/header/HeaderComponent';
import HeaderContentsComponent from '../components/headerContents/HeaderContentsComponent';
import style from './layout.module.css'


interface LayoutProps {
  children?: ReactNode;

}


/**
 * 레이아웃 페이지
 * @param param0 
 * @returns 
 */
const Layout:FC<LayoutProps> = ({ children}) => {

  
  return (
 
   
    <div className={style.SummonerDetailFronttest} > 
    <body>
    <HeaderComponent/>
    <HeaderContentsComponent/>
    
      {children}
    </body>
    </div>
  
  );
};

export default Layout;
