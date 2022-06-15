import { makeAutoObservable } from "mobx";


export default class MostChampion {
    constructor (){
        makeAutoObservable(this);
    }

    assists?: number;
    cs?: number;
    deaths?: number;
    games?: number;
    id?: number;
    imageUrl?: string;
    key?: string;
    kills?: number;
    losses?: number;
    name?: string;
    rank?: number;
    wins?: number;

   

}