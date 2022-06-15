import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useStore } from '../../libs/hooks/useStore';
import TierComponent from './TierComponent';
import styles from './HeaderContentsComponent.module.css'


const HeaderContentsComponent = observer(() => {
  const { userBasicInfoStore: store } = useStore();
  return (
    <div className={styles.wrapper}>
        <div className={styles.tierWrapper}>
          {store.summonerDTO?.summoner?.previousTiers?.map((value, index) => {
            return (
              <TierComponent
                key={index}
                season={value.season}
                tier={value.tier}
                tierScore={value.string}
              />
            );
          })}
        </div>
      <div className={styles.playerInfoWrapper}>
          <div className={styles.playerImageWrapper}>
            <img
                className={styles.playerImage}
              src={store.summonerDTO?.summoner?.profileBackgroundImageUrl}
              alt={store.summonerDTO?.summoner?.name}
            />
              <img
                  className={styles.playerImageBorder}
                  src={store.summonerDTO?.summoner?.profileBorderImageUrl}
                  alt={store.summonerDTO?.summoner?.name}
              />
            <div className={store.playerLevel}>
            {store.summonerDTO?.summoner?.level}
            </div>
          </div>
          <div>{store.summonerDTO?.summoner?.name}</div>
          <div>레더랭킹{store.summonerDTO?.summoner?.ladderRank?.rank}위</div>
          <div>
            (상위{store.summonerDTO?.summoner?.ladderRank?.rankPercentOfTop})
          </div>
        </div>
    </div>
  );
});

export default HeaderContentsComponent;
