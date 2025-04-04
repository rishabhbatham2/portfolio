import React, { useState } from "react";
import { motion } from "framer-motion";
import "./StyledButton.css";

const StyledButton = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div 
      className="button__cont" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      animate={clicked ? { scale: 1 } : hovered ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <motion.div
        className="btn__bg"
        initial={{ x: "100%" }}
        animate={hovered ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <span className="button__text">
        read more
      </span>
    </motion.div>
  );
};

export default StyledButton;
