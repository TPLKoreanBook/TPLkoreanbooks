import { motion } from "framer-motion";
// import { AnimatePresence } from 'framer-motion';


const animations = {
    initial: { opacity: 1, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: -200 }
}

const AnimatedPage = ({ children, isAnimationEnd }) => {

    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => isAnimationEnd(true)}
            transition={{ duration: 5 }}
        >
            {children}
        </motion.div>
    )
};

export default AnimatedPage;