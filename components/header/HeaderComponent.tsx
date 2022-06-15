import { observer } from 'mobx-react-lite';
import React from 'react';
import InputTextButton from '../common/InputTextButton';
import headerStyle from './Header.module.css';

/**
 * 해더 페이지
 * @returns
 */
const HeaderComponent = observer(() => {
  return (
    <div className={headerStyle.rectangle4}>
      <InputTextButton />
    </div>
  );
});

export default HeaderComponent;
