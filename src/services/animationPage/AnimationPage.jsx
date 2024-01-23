import React from "react";
import { motion } from "framer-motion";

const animate = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: {},
};

export const AnimationPage = ({ children }) => {
  return (
    <>
      <motion.div
        variants={animate}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
};
