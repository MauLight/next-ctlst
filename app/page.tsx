'use client'

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

//* Components
import ButtonsGroup from "./components/main/buttons-group"
import MainMenu from "./components/main/main-menu"
import EntranceAnimation from "./components/main/entrance-animation"
import EditStoryMenu from "./components/main/edit-story-menu"
import LinksGroup from "./components/main/links-group"

const savedStories = ['My first story.', 'something', 'else', 'and another']

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
            animate={{ opacity: 1, scaleY: 1, height: 'auto' }}
            transition={{ duration: 0.2, type: 'spring', bounce: 0.4 }}

            className="w-[550px] h-auto min-h-[151px] py-6 px-5 border-[1px] border-sky-600 rounded-[15px] transition-all duration-300">

            { /* First menu */}
            <AnimatePresence>

              <MainMenu display={!displayEditStoryMenu} text={['What do you want to do?']}>
                <ButtonsGroup
                  buttonLabels={['Write a new story.', 'Edit a saved story.']}
                  actions={[() => { }, handleOpenEditStoryMenu]}
                />
              </MainMenu>

            </AnimatePresence>

            {/* Edit story menu */}

            <EditStoryMenu
              display={displayEditStoryMenu}
              itemsNum={savedStories.length}
            >
              <LinksGroup
                buttonLabels={savedStories}
                actions={[() => { }, handleOpenEditStoryMenu]}
              />
            </EditStoryMenu>

          </motion.section>

          {/* Entrance animation */}
          <EntranceAnimation display={!fadeOut} />

        </AnimatePresence>
      </div>
    </main>
  );
}
