'use client'

import { useScroll, motion, useSpring } from 'motion/react'

export default function CompletionDisplay() {

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 50,
        restDelta: 0.0002
    })

    return (
        <>
            <motion.div
                id="scroll-indicator"
                className='z-50'
                style={{
                    scaleX,
                    position: "fixed",
                    top: 60,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#0EA5E9",
                }}
            />
        </>
    )
}
