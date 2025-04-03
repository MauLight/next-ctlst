'use client'

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

//* Components
import ButtonsGroup from "./components/main/buttons-group"
import MainMenu from "./components/main/main-menu"

export default function Home() {

  const [fadeOut, setFadeOut] = useState<boolean>(false)
  const [displayEditStoryMenu, setDisplayEditStoryMenu] = useState<boolean>(false)

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
            animate={{ opacity: 1, scaleY: 1 }}

            transition={{ duration: 0.2, type: 'spring', bounce: 0.4 }}

            className="w-[550px] h-auto min-h-[151px] py-6 px-5 border-[1px] border-sky-600 rounded-[15px] transition-all duration-300">

            { /* First menu */}
            <AnimatePresence>

              <MainMenu display={!displayEditStoryMenu}>
                <ButtonsGroup
                  buttonLabels={['Write a new story.', 'Edit a saved story.']}
                  actions={[() => { }, handleOpenEditStoryMenu]}
                />
              </MainMenu>

            </AnimatePresence>

            <AnimatePresence>
              {
                displayEditStoryMenu && (
                  <motion.div
                    initial={{ height: 'auto' }}
                    animate={{ height: 400 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    key={'display-edit-menu'} className="w-full h-full"></motion.div>
                )
              }
            </AnimatePresence>

          </motion.section>

          {/* Entrance animation */}
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
