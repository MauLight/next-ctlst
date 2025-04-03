import { AnimatePresence, motion } from 'motion/react'
import { type ReactNode } from 'react'
import MainMenu from './main-menu'

interface EditStoryMenuProps { display: boolean, itemsNum: number, children: ReactNode }

export default function EditStoryMenu({ display, itemsNum, children }: EditStoryMenuProps): ReactNode {
    return (
        <AnimatePresence>
            {
                display && (
                    <motion.div
                        initial={{ height: 'auto' }}
                        animate={{ height: itemsNum > 2 ? 90.78 + (20.595 + (4 * (itemsNum - 2))) * (itemsNum - 2) : 'auto' }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        key={'display-edit-menu'} className="w-full h-full">
                        <MainMenu display={display} text={['Which story do you want to edit?']}>
                            {
                                children
                            }
                        </MainMenu>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}
