'use client';

import { motion, useAnimation } from 'framer-motion';
import * as React from 'react';

const Follow: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const controls = useAnimation();

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      setEmail('');
    } else {
      controls.start({
        x: 0,
        transition: {
          type: 'spring',
          velocity: '600',
          stiffness: '5000',
          damping: 15,
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-9 w-full items-center justify-between rounded-md bg-gray-200 p-1 dark:bg-gray-800"
    >
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="placeholder:font-RubikMedium h-full w-36 bg-transparent pl-2 text-xs text-neutral-400 placeholder:text-xs placeholder:text-neutral-600 focus:outline-none"
        placeholder="name@email.com"
        type="text"
      />
      <motion.button
        animate={controls}
        className="font-RubikMedium h-full w-20 rounded-md bg-[#696969] p-1 text-xs text-neutral-50"
      >
        关注
      </motion.button>
    </form>
  );
};

export default Follow;
