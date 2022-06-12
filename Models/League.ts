import { makeAutoObservable } from "mobx";
import TierRank from "./TierRank";


export default class League {
    constructor (){
        makeAutoObservable(this);
    }

    hasResults?: boolean;
    losses?: number;
    tierRank?: TierRank;
    wins?: number;

}