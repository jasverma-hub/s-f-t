import React from 'react';
import TransparentCard from '../Common/TransparentCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, AlertTriangle, BarChart, Timer } from "lucide-react"; // Correct Lucide Icons

const cardData = [
  {
    icon: <Clock size={24} className="text-white" />,
    title: 'Waiting for Analyst',
    description: 'Analyst is dealing with other problems, hold on...',
  },
  {
    icon: <AlertTriangle size={24} className="text-yellow-400" />,
    title: 'Writing Query',
    description: 'Querying across so many tools gets complex...',
  },
  {
    icon: <BarChart size={24} className="text-blue-400" />,
    title: 'Asking ChatGPT',
    description: 'What does this PowerShell Command even mean?',
  },
  {
    icon: <Timer size={24} className="text-green-400" />,
    title: 'Asking Supervisor',
    description: 'The analyst is in training and needs some help...',
  },
];

export const AlertCardIndication = () => {
  const [visibleIndex, setVisibleIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentCard = cardData[visibleIndex]; // 👈 only pick current

  return (
    <div className="relative h-[100px] overflow-hidden">
      <div className="absolute w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={visibleIndex}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex items-center justify-center flex-col gap-5"
          >
            <TransparentCard>
              <div className="flex w-[470px] items-center">
                {currentCard.icon && (
                  <div className="w-8 h-8 flex items-center justify-center mr-3">
                    {currentCard.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-white font-medium mb-1">{currentCard.title}</h3>
                  <p className="text-slate-400 text-sm">{currentCard.description}</p>
                </div>
              </div>
            </TransparentCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
