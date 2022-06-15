import { makeAutoObservable } from "mobx";


export default class ChampionWinRate {
    constructor (){
        makeAutoObservable(this);
    }
    
    id?: number;
    imageUrl?: string;
    key?: string;
    losses?: number;
    name?: string;
    wins?: number;
   

}