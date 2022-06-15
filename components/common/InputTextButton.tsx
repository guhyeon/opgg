
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStore } from '../../libs/hooks/useStore';
import style from './InputTextButton.module.css'


/**
 * 인풋텍스트박스 버튼 컴포넌트
 * @returns 
 */
const InputTextButton = observer(() => {
    
    const {userBasicInfoStore : store , winRateStore : winRateStore, matchesStore : matchesStore} = useStore();

    const [textValue , setTextValue] = useState<string>('');



    /**
     * inputbox 변경시 value set
     * @param e 
     */
    const inputTextOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
       
       setTextValue(e.target.value)

    }

    
    return (
    //     <div className={style.Rectangle5}>
    //         <span className={style.span}>
    //     소환사명,챔피언…
    //   </span>
     
    //   </div>


    // todo 우측에 검색버튼 달기
    <>
    <input type='text' className={style.Rectangle5} placeholder='소환사명,챔피언…' onChange={inputTextOnChange} value={textValue} />
    <button onClick={async()=>{
        await store.searchUserInfo(textValue);
        await winRateStore.mostInfoApi(textValue);
        await matchesStore.matchesInfoApi(textValue);
    }} >검색</button>
    </>         
        
      
    );
});

export default InputTextButton;