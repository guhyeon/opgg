import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../libs/hooks/useStore';
import _ from 'lodash';
import {
  csCalculate,
  kDACalculate,
  winRateCalculate,
} from '../../libs/commons';

/**
 * 승률 컴포넌트
 * @returns
 */
const MatchesComponent = observer(() => {
  const { winRateStore: store } = useStore();

  const [tabIndex, setTabIndex] = useState<number>(1);
  const [tabView, setTabView] = useState<number>(1);

  useEffect(() => {
    setTabView(tabIndex);
  }, [tabIndex]);

  return (
    <div>
      <ul>
        <li onClick={() => setTabIndex(1)}>전체</li>
        <li onClick={() => setTabIndex(2)}>솔로게임</li>
        <li onClick={() => setTabIndex(3)}>자유랭크</li>
      </ul>

      {tabView === 1 &&
        store.champions?.map((value) => {
          return (
            <div key={value?.id}>
              <img alt="챔피언" src={value?.imageUrl} />
              <p>{value?.name}</p>
              <p>{kDACalculate(value.kills!, value.assists!, value.deaths!)}</p>
              <p>승률{winRateCalculate(value.wins!, value.losses!, 0)}</p>
              <p>cs{csCalculate(value.wins!, value.losses!, 1, value.cs!)}</p>
              <p>cs{value.cs}</p>
              <p>킬{value?.kills}</p>
              <p>어시{value?.assists}</p>
              <p>데스{value?.deaths}</p>
              <p>게임{value?.games}</p>
            </div>
          );
        })}

      {tabView === 2 &&
        store.orderByRecentWinRate?.map((value) => {
          return (
            <div key={value?.id}>
              <img alt="7일간승률" src={value?.imageUrl} />
              <p>{value?.name}</p>
              <p>승률{winRateCalculate(value.wins!, value.losses!)}</p>
              <p>{value?.wins}승</p>
              <p>{value?.losses}패</p>
            </div>
          );
        })}
    </div>
  );
});

export default MatchesComponent;
