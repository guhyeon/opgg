import axios from 'axios';
import { action, makeAutoObservable, runInAction, toJS } from 'mobx';
import SummonerDTO from '../Models/SummonerDTO';

import RootStore from './RootStore';

export default class UserBasicInfoStore {
  rootStore: RootStore;

  /**
   * response type 가져오기
   */
  summonerDTO?: SummonerDTO;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  /**
   * 검색버튼 클릭시 api call
   * @param userNickName
   */
  @action
  searchUserInfo = async (summonerName: string) => {
    //TODO 데이터 없을때 예외처리 해야함
    // 무조건 200으로 떨어짐

    try {
      const response = await axios.get(
        `https://codingtest.op.gg/api/summoner/${summonerName}`,
        {
          params: {
            summonerName: summonerName,
            hl: 'ko',
          },
        }
      );

      if (response.status === 200) {
        runInAction(() => {
          this.summonerDTO = toJS(response.data);
        });
      } else {
        alert('잠시후에 다시 시도해주세요.');
      }
    } catch (err) {
      console.error('Error >>', err);
    }
  };
}
