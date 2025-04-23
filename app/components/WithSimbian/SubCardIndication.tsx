import React from 'react';
import TransparentCard from '../Common/TransparentCard';
import { AlertTriangle, BarChart2, Timer } from 'lucide-react'; // <-- Lucide icons yaha import kiye

const cardSubData = [
  {
    icon: <AlertTriangle size={24} className="text-green-400" />, // Lucide icon
    title: 'Less Noise',
    description: '90% of alert resolved automatically, 24/7',
  },
  {
    icon: <BarChart2 size={24} className="text-green-400" />, // Lucide icon
    title: 'Holistic insight',
    description: 'Correlate alert and your environment into the big picture',
  },
  {
    icon: <Timer size={24} className="text-green-400" />, // Lucide icon
    title: 'Adapts automatically',
    description: 'No SOAR needed. Investigate every alert, including new ones, with the best of Simbian knowledge and yours.',
  },
];

export const SubCardIndication = () => {
  return (
    <div className="relative h-[240px] overflow-hidden">
      <div className="absolute w-full flex flex-col gap-3">
        {cardSubData.map((item, index) => (
          <TransparentCard key={index}>
            <div className="flex w-[470px]">
              {item.icon && (
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white">
                  {item.icon}
                </div>
              )}
              <div>
                <p className="text-white font-medium text-sm">{item.title}</p>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            </div>
          </TransparentCard>
        ))}
      </div>
    </div>
  );
};
