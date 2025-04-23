import React, { ReactNode, useEffect, useState } from 'react';
import { ShieldAlert, BellOff, CircleX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Card = {
  icons: ReactNode;
  title: string;
  value: number;
  blocks: number;
};

type BlockItem = {
  id: string;
  cardIdx: number;
};

const MonitoringCard: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { icons: <BellOff />, title: 'Ignored Alerts', value: 10, blocks: 10 },
    { icons: <CircleX />, title: 'Wrongly Closed', value: 4, blocks: 4 },
    { icons: <ShieldAlert />, title: 'Active Threats', value: 5, blocks: 5 },
  ]);

  const [blockMap, setBlockMap] = useState<BlockItem[]>([]);

  useEffect(() => {
    const initialBlocks: BlockItem[] = [];
    cards.forEach((card, cardIdx) => {
      for (let i = 0; i < card.blocks; i++) {
        initialBlocks.push({ id: `${cardIdx}-${i}`, cardIdx });
      }
    });
    setBlockMap(initialBlocks);
  }, []);

  useEffect(() => {
    const clearBlocks = async () => {
      for (const block of [...blockMap]) {
        setBlockMap(prev => prev.filter(b => b.id !== block.id));

        setCards(prev =>
          prev.map((card, idx) =>
            idx === block.cardIdx
              ? {
                  ...card,
                  blocks: Math.max(0, card.blocks - 1),
                  value: Math.max(0, card.value - 1),
                }
              : card
          )
        );

        await new Promise(res => setTimeout(res, 200));
      }
    };

    if (blockMap.length > 0) {
      const timeout = setTimeout(() => clearBlocks(), 500);
      return () => clearTimeout(timeout);
    }
  }, [blockMap]);

  return (
    <div className="relative space-y-4">
      {cards.map((card, cardIdx) => (
        <div
          key={cardIdx}
          className="backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-white"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              {card.icons}
              <span>{card.title}</span>
            </div>
            <span className="text-green-600 font-bold text-xl">{card.value}</span>
          </div>
          <div className="flex space-x-1 min-h-6 bg-[#ffffff23]">
            <AnimatePresence mode="popLayout">
              {blockMap
                .filter(b => b.cardIdx === cardIdx)
                .map(block => (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.4 }}
                    className="w-6 h-6 bg-white rounded"
                  />
                ))}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonitoringCard;