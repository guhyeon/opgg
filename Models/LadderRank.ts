import { makeAutoObservable } from "mobx";


export default class LaddeerRank {
    constructor (){
        makeAutoObservable(this);
    }

    rank ?: number;

    rankPercentOfTop ? : number;

}