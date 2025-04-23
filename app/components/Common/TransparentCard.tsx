import React, { ReactNode } from 'react';

type TransparentCardProps = {
  children?: ReactNode;
}

const TransparentCard = ({ children }: TransparentCardProps) => {
  return (
    <div className="bg-slate-400/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3  hover:bg-slate-800/50 transition duration-300">
      {children}
    </div>
  );
};

export default TransparentCard;