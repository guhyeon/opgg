import { makeAutoObservable } from "mobx";
import Champions from "./Champions";
import RecentWinRate from "./RecentWinRate";


export default class MostInfoDTO {
    constructor (){
        makeAutoObservable(this);
    }

    champions?: Champions[];
    recentWinRate?: RecentWinRate[];

  

}