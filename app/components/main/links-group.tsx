import { ReactNode, useLayoutEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

interface LinksGroupProps {
    buttonLabels: Array<string>
    actions: Array<() => void>
}

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

export default function LinksGroup({ buttonLabels, actions }: LinksGroupProps): ReactNode {

    const buttonRefs = useRef<(HTMLDivElement | null)[]>([])

    function handleKeyNavigation(index: number, e: React.KeyboardEvent<HTMLDivElement>) {

        if (buttonRefs.current && e.key === 'Enter') {
            actions[index]()
        }

        if (buttonRefs.current && (e.key === 'ArrowDown' || e.key === 'ArrowRight')) {
            const nextIndex = (index + 1) % buttonLabels.length
            buttonRefs.current[nextIndex]?.focus()
        } else if (buttonRefs.current && (e.key === 'ArrowUp' || e.key === 'ArrowLeft')) {
            const prevIndex = (index - 1 + buttonLabels.length) % buttonLabels.length
            buttonRefs.current[prevIndex]?.focus()
        }
    }

    useLayoutEffect(() => {
        buttonRefs.current[0]?.focus()
    }, [])

    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            animate='visible'
            className="flex flex-col items-start gap-y-1">
            {
                buttonLabels.map((button, i) => (
                    <motion.div
                        ref={el => { buttonRefs.current[i] = el; }}
                        key={`button-${i}-${button}`}
                        variants={childVariants}
                        className="text-button"
                        onKeyDown={(e) => { handleKeyNavigation(i, e) }}
                    >
                        <Link href={`/screenwriter/${'somestring'}`}>
                            {`> ${button}`}
                        </Link>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}
