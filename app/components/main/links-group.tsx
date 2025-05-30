import { ReactNode, useLayoutEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

interface LinksGroupProps {
    buttonLabels: Array<string>
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

export default function LinksGroup({ buttonLabels }: LinksGroupProps): ReactNode {

    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

    function handleKeyNavigation(index: number, e: React.KeyboardEvent<HTMLButtonElement>) {

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
                    <Link key={`button-${i}-${button}`} href={`/screenwriter/${'somestring'}`}>
                        <motion.button
                            ref={el => { buttonRefs.current[i] = el; }}

                            variants={childVariants}
                            className="text-button"
                            onKeyDown={(e) => { handleKeyNavigation(i, e) }}
                        >

                            {`> ${button}`}
                        </motion.button>
                    </Link>
                ))
            }
        </motion.div>
    )
}
