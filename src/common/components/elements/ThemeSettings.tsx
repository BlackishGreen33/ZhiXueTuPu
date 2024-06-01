'use client';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

import { themeColors } from '@/common/dummy/dummy';
import useStore from '@/common/hooks/useStore';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';

const ThemeSettings = React.memo(() => {
  const { setCurrentColor, currentColor, setThemeSettings, themeSettings } =
    useStore();
  const { setTheme, theme } = useTheme();
  const { data: session } = useSession();
  const { toast } = useToast();
  const [apiKey, setapiKey] = useState('');

  const handleClick = async () => {
    const res = await axios.post('/api/apiKey', {
      apiKey: apiKey,
      email: session?.user.email,
    });
    if (res.status === 200) {
      toast({
        title: '成功',
        description: '您的 API 密钥已保存。',
        // @ts-ignore
        variant: 'success',
      });
    } else {
      toast({
        title: '错误',
        description: '发生了一些错误。请稍后再试。',
        variant: 'destructive',
      });
    }
  };

  return (
    <motion.div
      className="nav-item fixed right-0 top-0 z-[1000] w-screen bg-half-transparent"
      animate={{
        display: themeSettings ? 'block' : 'none',
        opacity: themeSettings ? 1 : 0,
        transition: {
          duration: 0.3,
          stiffness: 200,
        },
      }}
    >
      <motion.div
        className="float-right h-screen w-400 bg-white dark:bg-[#484B52] dark:text-gray-200"
        animate={{
          x: themeSettings ? 0 : 100,
          opacity: themeSettings ? 1 : 0,
          transition: {
            duration: 0.3,
            stiffness: 200,
          },
        }}
      >
        <div className="ml-4 flex items-center justify-between p-4">
          <p className="text-lg font-semibold">设定</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="ml-4 flex-col border-t-1 border-color p-4">
          <p className="text-xl font-semibold ">主题模式</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              className="cursor-pointer"
              onChange={(e) =>
                setTheme(e.target.value === 'light' ? 'light' : 'dark')
              }
              checked={theme === 'light'}
            />
            <label htmlFor="light" className="text-md ml-2 cursor-pointer">
              浅色模式
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              onChange={(e) =>
                setTheme(e.target.value === 'light' ? 'light' : 'dark')
              }
              className="cursor-pointer"
              checked={theme === 'dark'}
            />
            <label htmlFor="dark" className="text-md ml-2 cursor-pointer">
              深色模式
            </label>
          </div>
        </div>
        <div className="ml-4 border-t-1 border-color p-4">
          <p className="text-xl font-semibold ">主题颜色</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative mt-2 flex cursor-pointer items-center gap-5"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 cursor-pointer rounded-full"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setCurrentColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
        <div className="ml-4 border-t-1 border-color p-4">
          <p className="text-xl font-semibold">你的 Openai 秘钥</p>
          <p className="text-sm">
            如果您有 Openai 秘钥，可以解锁 AI 出题测验功能。
          </p>
          <div className="mt-2 flex gap-3">
            <Input
              value={apiKey}
              onChange={(e) => setapiKey(e.target.value)}
              type="password"
            />
            <Button
              style={{ backgroundColor: currentColor }}
              onClick={handleClick}
            >
              提交
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

export default ThemeSettings;
