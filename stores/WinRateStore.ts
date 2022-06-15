import axios from "axios";
import _ from "lodash";
import { action, makeAutoObservable, runInAction, toJS } from "mobx";
import Champions from "../Models/Champions";
import MostInfoDTO from "../Models/MostInfoDTO";
import RecentWinRate from "../Models/RecentWinRate";
import RootStore from "./RootStore";


export default class WinRateStore {

    rootStore : RootStore;


    mostInfoDTO ?: MostInfoDTO;

    champions?: Champions[];
    recentWinRate?: RecentWinRate[];

    orderByRecentWinRate?:RecentWinRate[];



    constructor(rootStore: RootStore) {
        makeAutoObservable(this, { rootStore: false });
        this.rootStore = rootStore;
    }

    @action
    mostInfoApi =async(summonerName : string)=> {


        try{
            const response = await axios.get(`https://codingtest.op.gg/api/summoner/${summonerName}/mostInfo`,{
                params :{
                    summonerName : summonerName,
                    hl : 'ko'
                }
    
            })

            if(response.status === 200){
                runInAction(()=>{
                
                    this.mostInfoDTO = toJS(response.data) 
                    this.champions = _.orderBy(this.mostInfoDTO?.champions,['games'],['desc'])

                    this.recentWinRate =  toJS(this.mostInfoDTO?.recentWinRate?.map((value)=>{   
                        let games = Number(value.losses) +Number(value.wins);
                        return {...value , games}

                    }))

                    this.orderByRecentWinRate =_.orderBy(this.recentWinRate,['games'],['desc'])


                })
                
              

            }else{
                 alert('잠시후에 다시 시도해주세요.')
            }

            


        } catch(err){
            console.error('Error >>',err)
        }

        
    } 
     
}