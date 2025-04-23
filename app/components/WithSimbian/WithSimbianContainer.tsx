import React from 'react';
import TitleContainer from './TitleContainer';
import { VerticalInfoIcons } from '../Common/VerticalInfoIcons';
import { DownArrow } from '../Common/DownArrow';
import { SubCardIndication } from './SubCardIndication';
import TransparentCard from '../Common/TransparentCard';
import { Sparkles } from 'lucide-react';
import MonitoringCard from './MonitoringCard';
import { LeftArrow } from '../Common/LeftArrow';

export const WithSimbianContainer = () => {
    return (
      <div className="w-full px-[100px] mt-[100px]">
        <div className="flex justify-start">
          <TitleContainer />
        </div>
  
        <div className="flex mt-[60px] gap-[60px]">
          <div className="w-[520px]">
            <MonitoringCard />
          </div>
  
          <div className="flex flex-col items-center gap-[10px]">
            <VerticalInfoIcons iconColor="black" />
            <DownArrow />
          </div>
  
          <div className="flex flex-col gap-[60px]">
            <div className="flex items-center">
              <LeftArrow />
              <div className="w-[520px]">
                <TransparentCard>
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white">
                      <Sparkles className="text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">Triaged & Reported</h3>
                      <p className="text-slate-300 text-sm">
                        The SOC Agent handled investigation and reporting
                      </p>
                    </div>
                  </div>
                </TransparentCard>
              </div>
            </div>
  
            <div className="w-[520px]">
              <SubCardIndication />
            </div>
          </div>
        </div>
      </div>
    );
  }  
