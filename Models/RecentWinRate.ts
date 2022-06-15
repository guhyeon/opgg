import { makeAutoObservable } from "mobx";


export default class RecentWinRate {
    constructor (){
        makeAutoObservable(this);
    }

    id?: number;
    imageUrl?: string;
    key?: string;
    losses?: number;
    name?: string;
    wins?: number;
    /**
     * api에서 데이터 받아서 계산
     */
    games?: number;
   
   


   

}