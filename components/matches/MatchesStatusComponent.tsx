import { observer } from 'mobx-react';
import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../../libs/hooks/useStore';
import _, { update } from 'lodash';
import {select} from 'd3'; 
import { gameTimeCalculate, kDACalculate, postionPlayCalculate, winRateCalculate } from '../../libs/commons';

/**
 * 매치 상태 컴포넌트
 * @returns 
 */
const MatchesStatusComponent = observer(() => {

    const {matchesStore : store} = useStore();


    const [postionGames , setPostionGames] = useState<number>(0);

    useEffect(()=>{

        if(postionGames){

            setPostionGames((prev)=> prev + postionGames)
        }

    },[postionGames])




    const svgRef = useRef(null);


    // const [circleData, setCircleData] = useState([5,20,25,30,45]);

    // useEffect(()=>{
    //     if(svgRef.current && svgRef.current !== null){

    //         const svg = select(svgRef.current)
    //         svg
    //             .select('circle')
    //             .data(circleData)
    //             .join(
    //                 (enter)=> enter.append('circle')
    //                 ,(update)=> update.attr('class','updated')
    //                 ,(exit)=> exit.remove()

    //             )
    //             .attr('r',(value)=> value)
    //             .attr('cx',(value)=> value * 2)
    //             .attr('cy',(value)=> value * 2)
    //             .attr('stroke','red');

    //     }
        


    // },[circleData])

    // useEffect(()=>{

    //     if(store.matchesDTO?.summary){

    //         const total = Number(store.matchesDTO?.summary?.wins || 0) + Number(store.matchesDTO?.summary?.losses || 0) ;
    //         const wins = 33;
    //         const looses = 33 ;
        






    // },[store.matchesDTO?.summary])


//     assists: 37
// deaths: 29
// kills: 24
// losses: 8
// wins: 12

    
     return (
         <>
         <div>전체</div>
         <div>솔로게임</div>
         <div>자유랭크</div>
         <div>

                        <div>
                            <h4>{`${Number(store.matchesDTO?.summary?.wins || 0) + Number(store.matchesDTO?.summary?.losses || 0)}전 ${Number(store.matchesDTO?.summary?.wins || 0)}승 ${Number(store.matchesDTO?.summary?.losses || 0)}패`}</h4>
                            <div>
                                <svg ref={svgRef} >
                                    <circle/>
                                </svg>
                            </div>
                            <div>{`${Number(store.matchesDTO?.summary?.kills || 0)} / ${Number(store.matchesDTO?.summary?.assists || 0)} / ${Number(store.matchesDTO?.summary?.deaths || 0)}`}</div>

                          
                            <div>{kDACalculate(store.matchesDTO?.summary?.kills || 0 , store.matchesDTO?.summary?.assists || 0 , store.matchesDTO?.summary?.deaths || 0 )}</div>
                            <div>킬관여율</div>
                        </div>
                        <div>
                            {store.matchesDTO?.champions?.map((value)=>{

                               

                                return (
                                    <>
                                    <div><img src={value.imageUrl} /></div>
                                    <div>{value.name}</div>
                                    <div>{winRateCalculate(value.wins! ,value.losses! , 0)}%</div>
                                    <div>{`${value.wins}승 / ${value.losses} 패`}</div>
                                    <div>{kDACalculate(value.kills! , value.assists!, value.deaths!)} 평점</div>
                                    </>
                                )


                            })}
                            
                        </div>
                        <div>
                            <h4>선호 포지션 (랭크)</h4>
                            {store.matchesDTO?.positions?.map((value,index)=>{
                              
                            return(
                                <>
                                <div>포지션 이미지</div>
                                <div>{value.positionName}</div>
                                <div>포지션픽률</div>
                                <div>{winRateCalculate(value.wins! || 0 ,value.losses! || 0 , 0)}%</div>
                                
                                
                                </>
                            )

                            })}
                     
                        </div>
         </div>
         <ul>
            {store.matchesDTO && store.matchesDTO.games?.map((value , index)=>{
           
                
                return (
                    <li key={value.gameId}>
                      <div>
                          <div>{value.gameType}</div>
                          <div>value.createDate 계산해야함</div>
                          <div>{value.isWin ? '승리' : '패배'}</div>
                          <div>{gameTimeCalculate((value.gameLength!).toString())}</div>
                      </div>
                      <div>
                          <div><img src={value.champion?.imageUrl}/></div>
                          <div>스킬1</div>
                          <div>스킬2</div>
                          <div>버프1</div>
                          <div>버프2</div>
                          <div>{value.champion?.level}</div>
                      </div>
                      <div>
                          <div>2 / 3 / 8</div>
                          <div>3.33 :1 평점</div>
                      </div>
                      <div>
                          <div>레벨15</div>
                          <div>223 (8.1) cs</div>
                          <div>킬관여 33%</div>
                      </div>
                      <div>
                          <div>아이템 8칸</div>
                          <div>아이템 8칸</div>
                          <div>아이템 8칸</div>
                          <div>아이템 8칸</div>
                          <div>아이템 8칸</div>
                          <div>아이템 8칸</div>
                          <div>아이템 8칸</div>
                          <div>아이템 8칸</div>
                          <div>제어와드</div>
                      </div>
                      <div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                          <div>
                              <img alt='캐릭터사진'/>
                              <div>플레이어명</div>
                          </div>
                      </div>
                    </li>
                    
                )

            })}
         </ul>
        </>
    );
});

export default MatchesStatusComponent;