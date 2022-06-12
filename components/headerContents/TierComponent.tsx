import { observer } from 'mobx-react';
import React, { FC, useState } from 'react';



interface TierComponentProps {

    /**
     * 시즌
     */
    season ?: number;
     /**
     * 티어
     */
    tier ?:string;
    /**
     * 티어 + score
     */
    tierScore ?: string;


}


/**
 * 티어 가져오기
 */
const TierComponent:FC <TierComponentProps> = observer(({season,tier,tierScore}) => {


    const [isHovering, setIsHovering] = useState<Boolean>(false);
    
 

    return (
        <div  onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)} >{`S${season} ${tier}`}
            {isHovering ? (<p>{tierScore}</p>):('')}
        </div>
    );
});

export default TierComponent;