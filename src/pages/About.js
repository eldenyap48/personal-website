import React from 'react';
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.article initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.5 } }}  className="p-5">
            <motion.div variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5}}}}>
                
                <div className="text-5xl font-bold m-10">
                    About Me
                </div>

            </motion.div>
        </motion.article>
    )
}