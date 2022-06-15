import { makeAutoObservable } from "mobx";

/**
 * 데이터 전체 DTO
 */
export default class MatchesDTO {
    constructor (){
        makeAutoObservable(this);
    }

    champions ?: Champions[];
    games ?: GameInfo[];
    positions?: Positions[];
    summary ?: Summary;  

}


/**
 *  게임 객체 챔피언 정보
 */
 export class Champions {
     id?: number;
     key?: string;
     name ?: string;
     imageUrl ?: string;
     games ?: number;
     kills ?: number;
     deaths ?: number;
     assists ?: number;
     wins ?: number;
     losses ?: number;
    
 
}


/**
 *  게임 객체 챔피언 정보
 */
export class Champion {

    imageUrl ?: string;
    level ?: number;

}

/**
 * 게임 정보
 */
 export class GameInfo {

    champion ?: Champion;
    createDate	?: number;
    gameId ?: string;
    gameLength	?: number;
    gameType ?: string;
    isWin?:	boolean;
    items?: ImageObj[];
    mapInfo ?: MapInfo;
    mmr	?: number;
    needRenew ?:boolean;
    peak ?: string[];
    spells ?: ImageObj[];
    stats ?: GameInfoStats;
    summonerId?: string;
    summonerName?: string;
    tierRankShort?: string;

}

/**
 * 이미지 obj
 */
export class ImageObj {
    imageUrl?: string;
}

/**
 * mapInfo 맵정보
 */
 export class MapInfo {
    imageUrl?: string;
    mapId?: number;
}

/**
 * GameInfoStats
 */
 export class GameInfoStats { 
    general?: General;
    ward ?: Ward;
}

/**
 * General
 */
export class General {
    assist?: number;
    contributionForKillRate?: string;
    cs?: number;
    csPerMin?: number;
    death?: number;
    goldEarned?: number;
    kdaString?: string;
    kill?: number;
    largestMultiKillString?: string;
    opScoreBadge?: string;
    totalDamageDealtToChampions?: number;
}

/**
 * ward
 */
export class Ward {
    sightWardsBought?: number;
    visionWardsBought?: number;
}

/**
 * Positions
 */
 export class Positions {
    games?: number;
    losses?: number;
    position?: string;
    positionName?: string;
    wins ?: number;
}

/**
 * Summary
 */
 export class Summary {
    assists?: number;
    deaths?: number;
    kills?: number;
    losses?: number;
    wins?: number;
}



