import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';
import { useStore } from '../../libs/hooks/useStore';
import _ from 'lodash';
import {
  csCalculate,
  kDACalculate,
  winRateCalculate,
} from '../../libs/commons';
import Champions from '../../Models/Champions';

/**
 * 승률 컴포넌트
 * @returns
 */
const WinRateComponent = observer(() => {
  const { winRateStore: store } = useStore();

  const [tabIndex, setTabIndex] = useState<number>(1);

  const handleClickTab1 = useCallback(() => setTabIndex(1), []);

  const renderChampion = useCallback((value: Champions) => {
    return (
      <div key={value?.id}>
        <img alt="챔피언" src={value?.imageUrl} />
        <p>{value?.name}</p>
        <p>
          {kDACalculate(value.kills!, value.assists!, value.deaths!)} : 1 평점
        </p>
        <p>{winRateCalculate(value.wins!, value.losses!, 0)}%</p>
        <p>cs{csCalculate(value.wins!, value.losses!, 1, value.cs!)}</p>
        <p>킬{value?.kills}</p>
        <p>어시{value?.assists}</p>
        <p>데스{value?.deaths}</p>
        <p>게임{value?.games}</p>
      </div>
    );
  }, []);

  return (
    <div>
      <ul>
        <li onClick={handleClickTab1}>챔피언승률</li>
        <li onClick={() => setTabIndex(2)}>7일간 랭크 승률</li>
      </ul>

      {tabIndex === 1 &&
        // TODO 컴포넌트로 분리
        store.champions?.map((value) => {
          // TODO 컴포넌트로 분리
          return renderChampion(value);
        })}

      {tabIndex === 2 &&
        // TODO 컴포넌트로 분리
        store.orderByRecentWinRate?.map((value) => {
          // TODO 컴포넌트로 분리
          return (
            <div key={value?.id}>
              <img alt="7일간승률" src={value?.imageUrl} />
              <p>{value?.name}</p>
              <p>{winRateCalculate(value.wins!, value.losses!, 0)}%</p>
              <p>{value?.wins}승</p>
              <p>{value?.losses}패</p>
            </div>
          );
        })}
    </div>
  );
});

export default WinRateComponent;
