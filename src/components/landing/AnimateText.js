import { motion } from "framer-motion";
import React from "react";

export const AnimateText = ({ animatedText }) => {
  const text = animatedText?.split(" ");

  return (
    <>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
};
