import { makeAutoObservable } from "mobx";
import LaddeerRank from "./LadderRank";
import League from "./League";
import TierRank from "./TierRank";


export default class Summoner {
    constructor (){
        makeAutoObservable(this);
    }


ladderRank?: LaddeerRank;
leagues?: League[];
level?: number;
name?: string;
previousTiers?: TierRank[];
profileBackgroundImageUrl?: string;
profileBorderImageUrl?: string;
profileImageUrl?: string;
url?: string;
}