import { motion } from "framer-motion";
// import { AnimatePresence } from 'framer-motion';


const animations = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: -1200 }
}

const ddd = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}

const AnimatedPage = ({ children, isAnimationEnd, type }) => {
    console.log(children)
    const variants = type === 'loading' ? animations : ddd;
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => isAnimationEnd(true)}
            transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    )
};

export default AnimatedPage;