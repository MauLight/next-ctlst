import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'

//* Components
import { ReactTyped } from 'react-typed'

interface MainMenuProps {
    display: boolean
    text: Array<string>
    children: ReactNode
}

export default function MainMenu({ display, children, text }: MainMenuProps): ReactNode {

    const [displayMainOptions, setDisplayMainOptions] = useState<boolean>(false)

    function handleDisplayMainOptions() {
        setTimeout(() => {
            setDisplayMainOptions(true)
        }, 1000)
    }

    return (
        <AnimatePresence>
            {
                display && (

                    <motion.div
                        key={'main-options'}
                        initial={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col transition-all duration-300 justify-start items-start gap-y-5"
                    >
                        <ReactTyped
                            showCursor={false}
                            className="text-main"
                            startDelay={500}
                            typeSpeed={20}
                            onComplete={handleDisplayMainOptions}
                            strings={text} />

                        {
                            displayMainOptions && (
                                <>
                                    {
                                        children
                                    }
                                </>
                            )
                        }
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}
