import { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PropTypes {
    children?: JSX.Element | React.ReactNode;
}

const PageAnimation = (props: PropTypes) => {

    const spring: any = {
        type: "spring",
        damping: 20,
        stiffness: 100,
        when: "afterChildren",
    };

    return(
        <AnimatePresence>
            <div>
                <motion.div
                    transition={spring}
                    initial={{ x: 20, opacity: 0.5 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0.5 }}
                >
                    {props.children}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}   

export default PageAnimation;