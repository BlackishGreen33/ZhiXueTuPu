'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { LuGithub, LuHelpCircle } from 'react-icons/lu';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/common/components/ui/dialog';

const DetailsDialog: React.FC = React.memo(() => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center rounded-md bg-slate-800 px-2 py-1 text-white">
          这是哪
          <LuHelpCircle className="ml-1 h-5 w-5" />
        </span>
      </DialogTrigger>
      <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            欢迎来到智学图谱测验系统！
          </DialogTitle>
          <DialogDescription>
            <div className="my-2 flex items-center gap-3">
              <p className="flex items-center">
                <LuGithub className="h-5 w-5" />
                <Link
                  className="ml-1 underline"
                  href="https://github.com/BlackishGreen33/ZhiXueTuPu"
                >
                  GitHub
                </Link>
              </p>
            </div>
            <p className="my-2 mt-4">
              你是否厌倦了平凡的测验，想要享受独特的、非凡的测验体验？那么，智学图谱测验系统将会是你最好的选择。智学图谱测验系统通过人工智能技术，将考试变成一种全新的、前所未有的体验。
            </p>
            <hr />
            <p className="my-2 font-semibold">
              <h4 className="text-base font-semibold">技术栈：</h4>
              <div className="mt-2 grid grid-cols-4 justify-around gap-y-3">
                <div className="flex items-center gap-2">
                  <Image
                    alt="nextjs"
                    src="/assets/nextjs.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="tailwind"
                    src="/tailwind.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="nextauth"
                    src="/assets/nextauth.png"
                    width={30}
                    height={30}
                  />
                  <span className="">NextAuth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="openai"
                    src="/assets/openai.png"
                    width={30}
                    height={30}
                  />
                  <span className="">OpenAI</span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    alt="react query"
                    src="/assets/react-query.png"
                    width={30}
                    height={30}
                  />
                  <span className="">React Query</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="primsa"
                    src="/assets/prisma.png"
                    width={30}
                    height={30}
                  />
                  <span className="">Prisma</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="typescript"
                    src="/assets/typescript.png"
                    width={30}
                    height={30}
                  />
                  <span className="">TypeScript</span>
                </div>
              </div>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
});

export default DetailsDialog;
