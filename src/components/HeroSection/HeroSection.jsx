import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import StyledButton from "../StyledButton/StyledButton";

const text =
  "We craft stunning websites, seamless apps, and the occasional mystery bug. Our code runs (most of the time), our designs impress (all the time), and if something breaks… well, it worked when we last checked!";

const chunkText = (str, size) => {
  const words = str.split(" ");
  let chunks = [];
  for (let i = 0; i < words.length; i += size) {
    chunks.push(words.slice(i, i + size).join(" "));
  }
  return chunks;
};

const textChunks = chunkText(text, 4);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const chunkVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.h1
        className="hero-title"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {textChunks.map((chunk, index) => (
          <motion.span
            key={index}
            variants={chunkVariants}
            custom={index}
            className="chunk"
          >
            {chunk} &nbsp;
          </motion.span>
        ))}
      </motion.h1>
      <StyledButton title={'read more'} />
      <div className="lin"></div>
      <div className="videocont">
        <video autoPlay loop muted className="herovideo">
          <source src="/videomain.mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
