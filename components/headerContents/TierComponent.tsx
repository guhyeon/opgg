import {observer} from 'mobx-react';
import React, {FC, useState} from 'react';
import ReactTooltip from 'react-tooltip';

import styles from './TierComponent.module.css'

interface TierComponentProps {
    /**
     * 시즌
     */
    season?: number;
    /**
     * 티어
     */
    tier?: string;
    /**
     * 티어 + score
     */
    tierScore?: string;
}

/**
 * 티어 가져오기
 */
const TierComponent: FC<TierComponentProps> = observer(
    ({season, tier, tierScore}) => {
        const [isHovering, setIsHovering] = useState<Boolean>(false);

        return (
            <>
                <div
                    data-tip={tierScore}
                    className={styles.wrapper}
                    onMouseOver={() => setIsHovering(true)}
                    onMouseOut={() => setIsHovering(false)}
                >

                    <b className={styles.season}>S{season}</b>
                    <span> {tier}</span>
                </div>
                <ReactTooltip place={"top"}/>
            </>
        );
    }
);

export default TierComponent;
