import { observer } from 'mobx-react-lite';
import React, {useState} from 'react';
import {useStore} from "../../libs/hooks/useStore";
import style from "./HeaderComponent.module.css";
import btnImg from '../../assets/images/opgg_btn_img.png'
/**
 * 해더 페이지
 * @returns
 */
const HeaderComponent = observer(() => {
    const {
        userBasicInfoStore: store,
        winRateStore: winRateStore,
        matchesStore: matchesStore,
    } = useStore();

    const [textValue, setTextValue] = useState<string>('');

    /**
     * inputbox 변경시 value set
     * @param e
     */
    const inputTextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.target.value);
    };

    return (
        //     <div className={style.Rectangle5}>
        //         <span className={style.span}>
        //     소환사명,챔피언…
        //   </span>

        //   </div>

        // todo 우측에 검색버튼 달기
        <div className={style.wrapper}>
            <div className={style.searchWrapper}>
                <input
                    className={style.searchInput}
                    type="text"
                    placeholder="소환사명,챔피언…"
                    onChange={inputTextOnChange}
                    value={textValue}
                />
                <a href="javascript:void(0)" className={style.searchButton} onClick={() => {
                    store.searchUserInfo(textValue);
                    winRateStore.mostInfoApi(textValue);
                    matchesStore.matchesInfoApi(textValue);
                }}>
                    <img src={btnImg.src}/>
                </a>
            </div>

        </div>
    );
});

export default HeaderComponent;
