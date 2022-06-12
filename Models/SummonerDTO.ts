import { makeAutoObservable } from "mobx";
import Summoner from "./Summoner";



export default class SummonerDTO {
    constructor (){
        makeAutoObservable(this);
    }


    summoner ?: Summoner;
}