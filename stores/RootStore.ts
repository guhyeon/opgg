import { action, observable, makeObservable, isObservableMap, isObservableSet } from "mobx";
import MatchesStore from "./MatchesStore";
import UserBasicInfoStore from "./UserBasicInfoStore";
import  WinRateStore  from "./WinRateStore";

export default class RootStore {
  userBasicInfoStore : UserBasicInfoStore;
  winRateStore : WinRateStore;
  matchesStore : MatchesStore;

  constructor() {
    this.userBasicInfoStore = new UserBasicInfoStore(this);
    this.winRateStore = new WinRateStore(this);
    this.matchesStore = new MatchesStore(this);
  }

  /**
   * store 화면에 녹이기
   * @param initialStore
   */
  @action hydrate =(initialStore : RootStore)=>{
    if(!initialStore) return;

        // 각 스토어 별로 대입
        Object.keys(initialStore).forEach((key: string) => {
            const newStore = (initialStore as any)[key];
            const prevStore = (this as any)[key];

            if (prevStore === undefined) {
              throw `RootStore에 ${key}가 없습니다.`;
            }

            // 스토어의 각 항목에 대입
            Object.keys(newStore).forEach((propertyKey: string) => {
              // Map, Set의 경우 JSON.stringify를 통해 Array로 변환된다.
              // 이 항목들을 다시 Map, Set으로 변환해준다.
              if (
                isObservableMap(prevStore[propertyKey]) ||
                prevStore[propertyKey] instanceof Map
              ) {
                prevStore[propertyKey] = new Map(newStore[propertyKey]);
              } else if (
                isObservableSet(prevStore[propertyKey]) ||
                prevStore[propertyKey] instanceof Set
              ) {
                prevStore[propertyKey] = new Set(newStore[propertyKey]);
              } else {
                prevStore[propertyKey] = newStore[propertyKey];
              }
            });
          });
  }
}
