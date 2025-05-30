"use client"

import { motion, Variants } from "framer-motion"

function LoadingThreeDotsJumping() {
    const dotVariants: Variants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="container loading-center"
        >
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <StyleSheet />
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            @theme {
                --color-primary: #08244c;
                --color-secondary: #ffffff;
                --color-tertiary: #d8b46c;
            }
            body {
                background-color: var(--color-primary);
                color: var(--color-secondary);
                font-family: 'Arial', sans-serif;
                justify-content: center;
                align-items: center;
                display: flex;
            }
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                width: 100vw;
                gap: 20px;
            }
            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: var(--color-tertiary);
                box-shadow: 0 0 10px var(--color-tertiary);
                will-change: transform;
            }
            `}
        </style>
    )
}

export default LoadingThreeDotsJumping
