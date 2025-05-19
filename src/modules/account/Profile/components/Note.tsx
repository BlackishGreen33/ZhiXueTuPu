'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { PiArrowLeftThin } from 'react-icons/pi';

interface NoteProps {
  noteId: string;
}

const Note: React.FC<NoteProps> = React.memo(({ noteId }) => {
  return (
    <motion.div
      className="text-neutral-950 dark:text-neutral-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: 'spring',
          stiffness: 200,
        },
      }}
    >
      <div className="sticky top-5">
        <div className=" ">
          <div className="-mt-6">
            <div className="flex h-10 w-full items-center gap-x-7 rounded-xl bg-neutral-700/25 backdrop-blur-md">
              <Link href="/profile">
                <div className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-300">
                    <PiArrowLeftThin className="text-lg text-black" />
                  </div>
                </div>
              </Link>
              <Link href="/">
                <button className="h-6 w-16 rounded-md bg-neutral-700/25 p-1 text-xs">
                  主页
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 h-full w-full rounded-2xl border border-neutral-300 bg-white p-5 dark:border-neutral-700 dark:bg-[#1C1C1C]">
        <motion.h1
          initial={{ x: 100, opacity: 0, filter: 'blur(4px)' }}
          animate={{
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              duration: 0.8,
              delay: 0.9,
              type: 'spring',
              stiffness: 200,
            },
          }}
          transition={{ delay: 0.4 }}
          className="text-center text-3xl font-bold"
        >
          如何编写类型安全的 CSS 模块
        </motion.h1>
        <div className="my-4 flex items-center justify-center gap-x-2">
          <p className="flex h-5 w-fit items-center justify-center rounded-md bg-[#282828] px-2 text-[10px] text-neutral-300">
            TypeScript
          </p>
          <div className="h-1 w-1 rounded-full bg-neutral-600 dark:bg-neutral-400" />
          <span className="text-xs">Sunday, July 22, 2023</span>
        </div>

        <div className="font-RubikMedium my-11">
          <Image
            width={1000}
            height={1000}
            className="h-56 w-full rounded-lg object-cover"
            src="https://raw.githubusercontent.com/BlackishGreen33/ZhiXueTuPu/main/public/assets/pic.jpg"
            alt="note image"
            loading="lazy"
          />

          <p className="my-7">
            使用 TypeScript
            的好处之一是它显著减少了特定错误的发生，比如输入错误;
            它甚至使访问原型方法和执行重构变得更加容易。在编译时捕捉到的错误会让开发人员获得更多的正常运行时间、更快乐的客户以及更少的随叫随到的压力。
          </p>

          <p className="my-7">
            使用
            TypeScript，输入应用程序的业务逻辑和控制流很容易，但是如果我们也能使
            CSS 类安全呢？准备好正确的 CSS
            类名可以确保将预期的样式应用于给定的组件，防止由于排版错误而将样式放错位置。
          </p>

          <p className="my-7">
            在本文中，我们将讨论什么是 CSS
            模块，探讨它们的开发人员经验缺陷，并学习如何通过使用 TypeScript
            自动化来解决这些缺陷。我们开始吧！
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="h-56 w-full rounded-lg object-cover"
              src="https://raw.githubusercontent.com/BlackishGreen33/ZhiXueTuPu/main/public/assets/pic.jpg"
              alt="note imgage"
              loading="lazy"
            />
          </div>

          <h2 className="text-2xl font-bold">什么是 CSS Modules?</h2>

          <p className="my-4">
            CSS 模块提供了一种在现代 Web 应用程序中编写模块化和范围化 CSS
            样式的方法。这些样式特定于应用程序的特定组件或模块。您可以使用常规的
            CSS 编写 CSS 模块。
          </p>

          <p className="my-4">
            在构建时，使用 Vite 或其他类似的工具，CSS 模块为 CSS
            文件中定义的每个类生成唯一的类名。然后在 JavaScript
            中使用生成的类名来引用 CSS，从而使 CSS
            模块化并可重用，而不会出现类名冲突或不必要的重复。
          </p>

          <h2 className="font-RubikExtraBold my-5 text-2xl">
            添加 CSS Modules 至你的项目
          </h2>

          <p>
            如果您想在下一个 TypeScript 应用程序中使用 CSS 模块，有几个选项。像
            Vite 和 Snowpack 这样的现代构建工具支持开箱即用的 CSS
            模块，但是如果您正在使用
            webpack，那么您可能需要包含一些次要的配置。构建完成后，您可以按照
            CSS 模块约定添加带有 module.CSS 扩展名的 CSS 文件:
          </p>

          <h2 className="font-RubikExtraBold my-5 text-2xl">
            开发人员体验的改进
          </h2>

          <p>
            CSS
            模块是一个很好的工具，但是由于类名是在运行时生成的，并且在构建之间进行更改，因此很难以类型安全的方式使用它们。您可以使用
            TypeScript 定义文件为每个 CSS
            模块手动创建类型，但是更新它们非常繁琐。让我们假设从 CSS
            模块中添加或删除了一个类名。在这种情况下，必须手动更新类型，否则类型安全将无法按预期工作。
          </p>

          <h2 className="font-RubikExtraBold my-5 text-2xl">自动化型别</h2>

          <p>
            在这种情况下，自动化解决方案很简单。我们将自动生成类型，而不是手动生成，并且我们将提供一个脚本来验证生成的类型是最新的，以避免不正确的
            CSS 模块类型泄漏到编译步骤中。
          </p>

          <h2 className="font-RubikExtraBold my-5 text-2xl">小结:</h2>

          <p>
            在 TypeScript
            生态系统中工作具有很大的潜力，但是，当过多地依赖于手工过程时，很容易破坏对类型系统的信任或产生不必要的摩擦。CSS
            模块非常棒，只需要一点额外的配置，就可以很容易地为生成的类添加类型安全性。你应该将这些无聊的事情自动化，这样你的团队就可以专注于构建一个伟大的产品。我希望你喜欢这篇文章，如果你有问题一定要在下面留言。编程愉快！
          </p>
        </div>
      </div>
    </motion.div>
  );
});

export default Note;
