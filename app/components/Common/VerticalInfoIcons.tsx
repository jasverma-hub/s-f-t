import React from 'react';
import { Grip } from 'lucide-react'
import { Section } from 'lucide-react';
import { ReceiptSwissFranc } from 'lucide-react';
import { CircularProgress } from './CircularProgress';


type VerticalInfoProps = {
  backgroundColor?: string;
  iconColor?: string;
}

export const VerticalInfoIcons: React.FC<VerticalInfoProps> = ({
  backgroundColor ,
  iconColor = '#000',
}) => {
  return (
    <div className="flex justify-center items-center mt-[-110px] " style={{ backgroundColor }}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <div className="w-8 h-8 bg-white rounded-sm flex justify-center items-center shadow-md">
           <Grip style={{color:iconColor}}/>
          </div>

          <div className="w-8 h-8 bg-white rounded-sm flex justify-center items-center shadow-md">
            <Section style={{color:iconColor}}/>
          </div>

          <div className="w-8 h-8 bg-white rounded-sm flex justify-center items-center shadow-md">
           <ReceiptSwissFranc style={{color:iconColor}}/>
          </div>

          <div className="w-8 h-8 bg-white rounded-sm flex justify-center items-center shadow-md">
          <CircularProgress iconColor={iconColor}/>
          </div>
        </div>
      </div>
    </div>
  );
};