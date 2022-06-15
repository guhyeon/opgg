import axios from "axios";
import _ from "lodash";
import { action, makeAutoObservable, runInAction, toJS } from "mobx";

import RootStore from "./RootStore";
import MatchesDTO from "../Models/MatchesDTO";


export default class MatchesStore {

    rootStore : RootStore;

    matchesDTO ?: MatchesDTO;



    constructor(rootStore: RootStore) {
        makeAutoObservable(this, { rootStore: false });
        this.rootStore = rootStore;
    }

    @action
    matchesInfoApi =async(summonerName : string)=> {


        try{
            const response = await axios.get(`https://codingtest.op.gg/api/summoner/${summonerName}/matches`,{
                params :{
                    summonerName : summonerName,
                    hl : 'ko',
                    lastMatch : '',
                }
    
            })

            if(response.status === 200){

                console.log(response);
                
                runInAction(()=>{

                    this.matchesDTO = toJS(response.data)
                
                   


                })
                
              

            }else{
                 alert('잠시후에 다시 시도해주세요.')
            }

            


        } catch(err){
            console.error('Error >>',err)
        }

        
    } 
     
}