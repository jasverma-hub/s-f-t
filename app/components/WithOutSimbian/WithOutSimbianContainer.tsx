import React from 'react';
import TitleContainer from './TitleContainer';
import { AlertCardIndication } from './AlertCardIndication';
import { SubCardIndication } from './SubCardIndication';
import RightArrow from '../Common/RightArrow';
import {DownArrow} from '../Common/DownArrow';
import {VerticalInfoIcons} from '../Common/VerticalInfoIcons';
import MonitoringCard from './MonitoringCard';

export const WithOutSimbianContainer = () => {
  return (
    <div className="w-full px-[100px] mt-[100px]">
      <div className="flex justify-end">
        <TitleContainer />
      </div>

      <div className="flex mt-[60px] gap-[60px]">
        <div className="flex flex-col gap-[60px]">
          <div className="flex items-center">
            <div className="w-[520px]">
              <AlertCardIndication />
            </div>
            <RightArrow />
          </div>

          <div className="w-[520px]">
            <SubCardIndication />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[10px]">
          <VerticalInfoIcons />
          <DownArrow />
        </div>

        <div className="w-[520px]">
          <MonitoringCard />
        </div>
      </div>
    </div>
  );
}

