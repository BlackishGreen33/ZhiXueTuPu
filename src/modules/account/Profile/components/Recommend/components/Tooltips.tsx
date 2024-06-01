'use client';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { useState } from 'react';
import { LuBox } from 'react-icons/lu';
import {
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
  PiYoutubeLogoThin,
} from 'react-icons/pi';
import { SlFeed } from 'react-icons/sl';

const Tooltips: React.FC = React.memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState();

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const people = [
    {
      id: 1,
      name: 'Our Feeds',
      position: 'https://github.com/BlackishGreen33/ZhiXueTuPu',
      image: <SlFeed />,
    },
    {
      id: 2,
      name: 'Instagram',
      position: 'https://github.com/BlackishGreen33/ZhiXueTuPu',
      image: <PiInstagramLogoThin />,
    },
    {
      id: 3,
      name: 'Instagram',
      position: 'https://github.com/BlackishGreen33/ZhiXueTuPu',
      image: <LuBox />,
    },
    {
      id: 4,
      name: 'Youtube',
      position: 'https://github.com/BlackishGreen33/ZhiXueTuPu',
      image: <PiYoutubeLogoThin />,
    },
    {
      id: 5,
      name: 'LinkedIn',
      position: 'https://github.com/BlackishGreen33/ZhiXueTuPu',
      image: <PiLinkedinLogoThin />,
    },
  ];

  return (
    <div className="flex cursor-pointer flex-row items-center gap-x-9">
      {people.map((testimonial) => (
        <div
          className="group relative -mr-4"
          key={testimonial.name}
          // @ts-ignore
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          // @ts-ignore
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
                <div className="relative z-30 text-base font-bold text-white">
                  {testimonial.name}
                </div>
                <div className="text-xs text-white">{testimonial.position}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <p>{testimonial.image}</p>
        </div>
      ))}
    </div>
  );
});

export default Tooltips;
