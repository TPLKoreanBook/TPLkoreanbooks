import { motion } from "framer-motion";


const animations = {
    // initial: { opacity: 1 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.6,

        }
    },
    exit: {
        opacity: 1,
        y: -1200,
        transition: {
            ease: "easeInOut",
            duration: 1.2,
            delay: 3
        }
    }
}

const ddd = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

const AnimatedPage = ({ children, isAnimationEnd, type }) => {
    const variants = type === 'loading' ? animations : ddd;
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => isAnimationEnd(true)}
        // transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
};

export default AnimatedPage;