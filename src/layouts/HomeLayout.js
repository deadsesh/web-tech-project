import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, pageVariants } from "../helpers/Transitions";

export const HomeLayout = () => {
    return (
        <motion.div
            className=""
            exit="out"
            animate="in"
            initial="out"
            variants={ pageVariants }
            transition={ pageTransitions }
        >
            <h1 style={ { color: "white" } }>Home</h1>
        </motion.div>
    )
}