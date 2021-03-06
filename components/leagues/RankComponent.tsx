import { observer } from 'mobx-react';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { useStore } from '../../libs/hooks/useStore';
import _ from 'lodash';
import { winRateCalculate } from '../../libs/commons';

const RankComponent = observer(() => {
  const { userBasicInfoStore: store } = useStore();

  return (
    <div >
      {store.summonerDTO?.summoner?.leagues?.map((value, index) => {
        return (
          <Fragment key={index}>
            <div>
              <img src={`${value.tierRank?.imageUrl || ''}`} alt="" />
            </div>
            <div>
              <div>{value.tierRank?.name || ''}</div>
              <div>{`총${Number(value.losses) + Number(value.wins)}게임`}</div>
              <div>{`${value.tierRank?.tier} ${value.tierRank?.shortString}`}</div>
              <div>{`${value.tierRank?.lp}LP / ${value.wins}승 ${value.losses}패`}</div>
              <div>{`승률${winRateCalculate(
                value.wins!,
                value.losses!
              )}%`}</div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
});

export default RankComponent;
