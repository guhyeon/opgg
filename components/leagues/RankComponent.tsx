import { observer } from 'mobx-react';
import Image from 'next/image';
import React from 'react';
import { useStore } from '../../libs/hooks/useStore';

const RankComponent = observer(() => {

    const { userBasicInfoStore : store} = useStore();

    return (
        <div>
            {store.summonerDTO?.summoner?.leagues && store.summonerDTO.summoner.leagues.map((value, index)=>{
            
                const totalGame = Number(Number(value.losses) + Number(value.wins))
                const odds = Number(value.wins) / totalGame * 100
                
            return (
                <>
                <div key={index} >
                    <Image src={`${value.tierRank!.imageUrl}`}  />
                </div>
                <div>
                 <div>{`총${totalGame}`}</div>   
                 <div>{`${value.tierRank?.tier} ${value.tierRank?.shortString}`}</div>   
                 <div>{`${value.tierRank?.lp} / ${value.wins}승 ${value.losses}패`}</div>   
                 <div>{`승률${odds}%`}</div>   
                </div>
                </>


            )

            })

            }


     
        </div>
    );


});

export default RankComponent;