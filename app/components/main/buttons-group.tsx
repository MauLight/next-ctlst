import { ReactNode, useLayoutEffect, useRef } from 'react'
import { motion } from 'motion/react'

const containerVariants = {
    initial: {},
    visible: {
        transition: {
            duration: 0.2,
            staggerChildren: 0.5
        }
    }
}

const childVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 }
}

export default function ButtonsGroup({ buttonLabels }: { buttonLabels: Array<string> }): ReactNode {

    const firstButtonRef = useRef<HTMLButtonElement>(null)

    useLayoutEffect(() => {
        firstButtonRef.current?.focus()
    }, [])

    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            animate='visible'
            className="flex flex-col items-start gap-y-1">
            {
                buttonLabels.map((button, i) => (
                    <motion.button
                        ref={i === 0 ? firstButtonRef : undefined}
                        key={`button-${i}-${button}`}
                        variants={childVariants}
                        className="text-button"
                    >
                        {`> ${button}`}
                    </motion.button>
                ))
            }
        </motion.div>
    )
}
