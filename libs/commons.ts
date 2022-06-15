
/**
 * KDA 계산기
 * @param kills 
 * @param assists 
 * @param deaths 
 */
export const kDACalculate =(kills:number,assists:number,deaths:number)=>{

  return ((kills + assists) / deaths).toFixed(2)
}

/**
 * 승률 계산기
 * @param wins 
 * @param loose 
 * @returns 
 */
export const winRateCalculate = (wins:number,loose:number,deciamlPoint:number=2 )=>{
 
  return (wins / (wins+loose) * 100).toFixed(deciamlPoint)

}


/**
 * 판당 cs 계산기
 * @param wins 
 * @param loose 
 * @param deciamlPoint 
 * @param cs 
 * @returns 
 */
 export const csCalculate = (wins:number,loose:number,deciamlPoint:number=2,cs:number )=>{
 
  return (cs / (wins+loose)).toFixed(deciamlPoint)

}

/**
 * 킬 관여율
 * @param kills 
 * @param assists 
 * @param ourTeamKill 
 * @param deciamlPoint 
 * @returns 
 */
export const killInvolveCalculate = (kills:number, assists:number , ourTeamKill:number,deciamlPoint:number=2 )=>{
 
  //(킬+어시 / 아군 전체킬)×100
  return ((kills + assists) / ourTeamKill).toFixed(deciamlPoint)

}





  /**
   *   포지션 비율  계산기
   * @param games 
   * @param totalGames 
   * @param deciamlPoint 
   * @returns 
   */
 export const postionPlayCalculate = (games:number,totalGames:number,deciamlPoint:number=0 )=>{
 
  // 9 x 100 / 20 = 45
  return ((games * 100) / totalGames ).toFixed(deciamlPoint)

}


export const gameTimeCalculate = (gameLength : string)=>{

  let gameTime;

  const gTime = gameLength.toString().split('')

  if(gTime.length  === 1){
    
      gameTime = gTime + '초'

  }else if (gTime.length  === 2){

    gameTime = gTime + '초'

  }else if (gTime.length  === 3){
     
    gameTime = gTime[0] + '분' + gTime[1] + gTime[2] + '초'

  }else {

    gameTime = gTime[0] + gTime[1] + '분' + gTime[2] + gTime[3] + '초'

  }

  return gameTime

}

