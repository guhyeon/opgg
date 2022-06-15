import { makeAutoObservable } from "mobx";
import ChampionWinRate from "./ChampionWinRate";
import MostChampion from "./MostChampion";


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
    games?: number;
   
   


   

}