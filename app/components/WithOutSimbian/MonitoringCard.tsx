import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { ShieldAlert, BellOff, CircleX } from 'lucide-react';
import { motion } from 'framer-motion';

type Card = {
  icons: ReactNode;
  title: string;
  value: number;
  blocks: number;
};

type FlyPosition = {
  id: number;
  x: number;
  y: number;
  toX: number;
  toY: number;
};

const MonitoringCard: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { icons: <BellOff />, title: 'Ignored Alerts', value: 193, blocks: 5 },
    { icons: <CircleX />, title: 'Wrongly Closed', value: 23, blocks: 4 },
    { icons: <ShieldAlert />, title: 'Active Threats', value: 2, blocks: 1 },
  ]);

  const [flyPos, setFlyPos] = useState<FlyPosition | null>(null);
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const targetPlaceholderRef = useRef<HTMLDivElement | null>(null);
  const flyingIdRef = useRef<number>(0);

  const getBlockRefKey = (cardIdx: number, blockIdx: number): string =>
    `card-${cardIdx}-block-${blockIdx}`;

  useEffect(() => {
    const animateTransfer = async () => {
      let transfers = 0;

      while (cards[0].blocks > 0 && transfers < 3) {
        const fromCardIndex = 0;
        const toCardIndex = 2;

        const fromBlockIndex = cards[fromCardIndex].blocks - 1;
        const fromKey = getBlockRefKey(fromCardIndex, fromBlockIndex);
        const fromEl = blockRefs.current[fromKey];
        const toEl = targetPlaceholderRef.current;

        if (!fromEl || !toEl) break;

        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();

        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        const id = ++flyingIdRef.current;

        setFlyPos({
          id,
          x: fromRect.left + scrollX,
          y: fromRect.top + scrollY,
          toX: toRect.left + scrollX,
          toY: toRect.top + scrollY,
        });

        await new Promise((res) => setTimeout(res, 1200));

        setCards((prev) => [
          { ...prev[0], blocks: prev[0].blocks - 1 },
          prev[1],
          { ...prev[2], blocks: prev[2].blocks + 1 },
        ]);

        setFlyPos(null);
        transfers++;
        await new Promise((res) => setTimeout(res, 500));
      }
    };

    const timeout = setTimeout(() => animateTransfer(), 800);
    return () => clearTimeout(timeout);
  }, [cards]);

  return (
    <div className="relative space-y-4">
      {cards.map((card, cardIdx) => (
        <div
          key={cardIdx}
          className="backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-white"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">{card.icons}</div>
            <span className="text-blue-400 font-bold text-xl">{card.value}</span>
          </div>
          <div className="flex space-x-1">
            {Array.from({ length: card.blocks }).map((_, blockIdx) => {
              const key = getBlockRefKey(cardIdx, blockIdx);
              return (
                <div
                  key={blockIdx}
                  className="w-6 h-6 bg-gray-700 rounded"
                  ref={(el) => {
                    blockRefs.current[key] = el;

                    if (
                      cardIdx === 2 &&
                      blockIdx === card.blocks - 1 &&
                      cards[0].blocks > 2
                    ) {
                      targetPlaceholderRef.current = el;
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      ))}

      {/* Fly block animation */}
      {flyPos && (
        <motion.div
          key={flyPos.id}
          className="w-6 h-6 bg-gray-700 rounded absolute"
          initial={{
            left: flyPos.x,
            top: flyPos.y,
          }}
          animate={{
            left: flyPos.toX,
            top: flyPos.toY,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 30,
            duration: 1.2,
          }}
        />
      )}
    </div>
  );
};

export default MonitoringCard;
