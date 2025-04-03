'use client'

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ReactTyped } from "react-typed"
import ButtonsGroup from "./components/main/buttons-group"

export default function Home() {

  const [fadeOut, setFadeOut] = useState<boolean>(false)
  const [displayMainOptions, setDisplayMainOptions] = useState<boolean>(false)
  const [displayEditStoryMenu, setDisplayEditStoryMenu] = useState<boolean>(false)

  function handleDisplayMainOptions() {
    setTimeout(() => {
      setDisplayMainOptions(true)
    }, 1000)
  }

  function handleOpenEditStoryMenu() {
    setDisplayEditStoryMenu(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true)
    }, 100)
  }, [])

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <AnimatePresence>
          <motion.section
            key={1}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1, transition: { delay: 0.05 } }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="w-[550px] h-auto min-h-[151px] py-6 px-5 border-[1px] border-sky-600 rounded-[15px]">

            <AnimatePresence>
              {
                !displayEditStoryMenu && (

                  <motion.div
                    key={'main-options'}
                    initial={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    className="flex flex-col justify-start items-start gap-y-5"
                  >
                    <ReactTyped
                      showCursor={false}
                      className="text-[0.9rem] text-sky-400"
                      startDelay={500}
                      typeSpeed={20}
                      onComplete={handleDisplayMainOptions}
                      strings={['What do you want to do?']} />

                    {
                      displayMainOptions && (
                        <ButtonsGroup
                          buttonLabels={['Write a new story.', 'Edit a saved story.']}
                          actions={[() => { }, handleOpenEditStoryMenu]}
                        />
                      )
                    }
                  </motion.div>
                )
              }
            </AnimatePresence>

          </motion.section>
          {
            !fadeOut && (
              <motion.div
                key={2}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.05 }}
                exit={{ opacity: 0 }}
                className="absolute w-full border-b-[2px] border-sky-600 flex justify-center items-center"
              >
                <div className="absolute w-[30px] h-[30px] rounded-full bg-sky-600"></div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </main>
  );
}
