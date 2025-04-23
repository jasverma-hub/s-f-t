import React from 'react';
import TransparentCard from '../Common/TransparentCard';
import { CircleX, Monitor, Info } from "lucide-react";

const cardSubData = [
  {
    icon: <CircleX size={24} className="text-red-400" />,
    title: 'Wasting valuable analyst time on false positives',
    description: 'Multiple alerts requiring manual review',
  },
  {
    icon: <Monitor size={24} className="text-red-400" />, 
    title: 'Processing one alert at a time, missing the big picture',
    description: 'Consider batch processing options',
  },
  {
    icon: <Info size={24} className="text-red-400" />, 
    title: 'More time fixing SOAR automation, less time on real threats',
    description: 'Workflow optimization needed',
  },
];

export const SubCardIndication = () => {

  return (
    <div className="relative h-[240px] overflow-hidden ">
      <div className="absolute w-full flex flex-col gap-3">
        {
          cardSubData.map((item, index) => {
            return (
              <TransparentCard key={index}>
                <div className='flex w-[470px]'>
                  {item.icon && (
                    <div className={` w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white`}>
                      {item.icon}
                    </div>
                  )}
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </TransparentCard>
            )
          })
        }
      </div>
    </div>
  );
};