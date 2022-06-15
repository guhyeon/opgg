import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useStore } from '../../libs/hooks/useStore';
import TierComponent from './TierComponent';

const HeaderContentsComponent = observer(() => {
  const { userBasicInfoStore: store } = useStore();
  return (
    <div>
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
      {/* todo img 알맞게 보여주기 */}
      <div>
        <img
          src={store.summonerDTO?.summoner?.profileBorderImageUrl}
          alt={store.summonerDTO?.summoner?.name}
        />
        <img
          src={store.summonerDTO?.summoner?.profileBackgroundImageUrl}
          alt={store.summonerDTO?.summoner?.name}
        />
        {store.summonerDTO?.summoner?.level}
      </div>

      <div>{store.summonerDTO?.summoner?.name}</div>
      <div>레더랭킹{store.summonerDTO?.summoner?.ladderRank?.rank}위</div>
      <div>
        (상위{store.summonerDTO?.summoner?.ladderRank?.rankPercentOfTop})
      </div>
    </div>
  );
});

export default HeaderContentsComponent;
