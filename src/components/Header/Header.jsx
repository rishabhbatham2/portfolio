import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

export default function Header() {
  const [rotation, setRotation] = useState(0);

  const handleHover = (angle) => {
    setRotation(angle);
  };

  return (
    <div className="header__cont">
      {/* Logo */}
      <div className="header__logo">
        <img src="/logo (2).png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="header__links">
        <p>Works</p>
        <p >Projects</p>
        <p >Contact us</p>
      </div>

      {/* Rotating Image */}
      <motion.div
        className="design"
        animate={{ rotate: rotation }}
        transition={{ type: "spring", stiffness: 100, damping: 40 }}
      >
        <img src="/assetss.png" alt="Design" />
      </motion.div>
    </div>
  );
}
