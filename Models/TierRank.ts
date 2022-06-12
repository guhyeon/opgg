import { makeAutoObservable } from "mobx";


export default class TierRank {
    constructor (){
        makeAutoObservable(this);
    }

    division?: string;
    imageUrl?: string;
    lp?: number;
    name?: string;
    season?: number;
    shortString?: string;
    string?: string;
    tier?: string;
    tierDivision?: string;
    tierRankPoint?: number;

}