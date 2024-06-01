'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiArrowLeftThin } from 'react-icons/pi';

interface NoteProps {
  noteId: string;
}

const Note: React.FC<NoteProps> = React.memo(({ noteId }) => {
  return (
    <motion.div
      className="text-neutral-950 dark:text-neutral-50 "
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
            <div className="flex h-10 w-full items-center gap-x-7 rounded-xl bg-neutral-700/25 backdrop-blur-md ">
              <Link href="/profile">
                <div className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700/50">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-300">
                    <PiArrowLeftThin className="text-lg text-black" />
                  </div>
                </div>
              </Link>
              <Link href="/">
                <button className="h-6 w-16 rounded-md bg-neutral-700/25 p-1 text-xs">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 h-full w-full rounded-2xl border border-neutral-300 bg-white p-5 dark:border-neutral-700 dark:bg-[#1C1C1C] ">
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
          className="text-center text-3xl font-bold "
        >
          How to write type-safe CSS Modules
        </motion.h1>
        <div className="my-4 flex items-center justify-center gap-x-2">
          <p className="flex h-5 w-fit items-center justify-center rounded-md bg-[#282828] px-2 text-[10px] text-neutral-300 ">
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
            src="./assets/pic.jpg"
            alt="note image"
            loading="lazy"
          />

          <p className="my-7">
            One of the benefits of using TypeScript is that it significantly
            reduces the occurrence of specific bugs, like typos; it even makes
            it easier to access prototype methods and perform refactoring. Bugs
            caught at compile time make for more uptime, happier customers, and
            less on-call stress for developers.
          </p>

          <p className="my-7">
            With TypeScript, it’s easy to type our application’s business logic
            and control flows, but what if we could make our CSS classes safe
            too? Having the correct CSS class names in place ensures that the
            intended styles are applied to a given component, preventing the
            styles from being misplaced due to typography errors.
          </p>

          <p className="my-7">
            In this article, we’ll discuss what CSS Modules are, explore their
            developer experience shortcomings, and learn how to address them by
            using automation with TypeScript. Let’s get started!
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="h-56 w-full rounded-lg object-cover"
              src="./assets/pic.jpg"
              alt="note imgage"
              loading="lazy"
            />
          </div>

          <h2 className="text-2xl font-bold">What are CSS Modules?</h2>

          <p className="my-4">
            CSS Modules provide an approach to writing modular and scoped CSS
            styles in modern web apps. These styles are specific to your
            application’s particular component or module. You can write CSS
            Modules by using regular CSS.
          </p>

          <p className="my-4">
            At build time, with Vite or other similar tools, the CSS Modules
            generate unique class names for each class defined in the CSS files.
            The generated class names are then used in JavaScript to refer to
            the CSS, thereby making the CSS modular and reusable without class
            name conflicts or unnecessary duplications.
          </p>

          <h2 className="font-RubikExtraBold my-5 text-2xl">
            Adding CSS Modules to your project
          </h2>

          <p>
            If you want to use CSS Modules in your next TypeScript app, you have
            several options. Modern build tools like Vite and Snowpack support
            CSS Modules out of the box, but you may need to include some minor
            configurations if you’re using webpack. Once the build setup is
            done, you can add CSS files with the module.css extension following
            the CSS Modules convention:
          </p>

          <h2 className="font-RubikExtraBold my-5 text-2xl">
            Developer experience improvements
          </h2>

          <p>
            CSS Modules are a great tool, but since class names are generated at
            runtime and change between builds, it’s hard to use them in a
            type-safe way. You could manually create types for each CSS Module
            using TypeScript definition files, but updating them is tedious.
            Let’s suppose that a class name is added or removed from the CSS
            Module. In that case, the types must be manually updated, otherwise,
            the type safety won’t work as expected.
          </p>

          <h2 className="font-RubikExtraBold my-5 text-2xl">
            Automatic typings
          </h2>

          <p>
            In this case, the automation solution is straightforward. We’ll
            generate the types automatically instead of manually, and we’ll
            provide a script to verify that the generated types are up-to-date
            to avoid incorrect CSS Module typings leaking into the compilation
            step.
          </p>

          <h2 className="font-RubikExtraBold my-5 text-2xl">Conclusion:</h2>

          <p>
            Working within the TypeScript ecosystem has great potential, but,
            when leaning too much on manual processes, it’s easy to blow trust
            in the type-system or generate unnecessary friction. CSS Modules are
            great, and with a little bit of extra configuration, its easy to add
            type safety to the generated classes. You should automate the boring
            stuff so that your team can focus on building a great products
            instead. I hope you enjoyed this article, and be sure to leave a
            comment below if you have questions. Happy coding!
          </p>
        </div>
      </div>
    </motion.div>
  );
});

export default Note;
