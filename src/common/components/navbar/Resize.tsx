'use client';

import React, { useCallback, useEffect } from 'react';

import {
  Cart,
  Chat,
  Notification,
  UserProfile,
} from '@/common/components/elements';
import useStore from '@/common/hooks/useStore';

const Resize: React.FC = () => {
  const { setActiveMenu, isClicked, setScreenSize, screenSize } = useStore();

  const handleResize = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, [setScreenSize]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (screenSize! <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);
  return (
    <>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </>
  );
};

export default Resize;
