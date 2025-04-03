'use client'

import { motion } from 'motion/react'
import React from 'react'

export default function Screenwriter() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
            className="w-[612px] h-[792px] border border-sky-600 rounded-[15px]"></motion.div>
    )
}
