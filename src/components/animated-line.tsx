import React from "react";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";

interface LineVariants extends Variants {
  hidden: {
    pathLength: number;
    opacity: number;
  };
  visible: (custom: number) => {
    pathLength: number;
    opacity: number;
    transition: {
      pathLength: {
        delay: number;
        type: string;
        duration: number;
        bounce: number;
      };
      opacity: { delay: number; duration: number };
    };
  };
}

const draw: LineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    const delay = 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0.3 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const LineStyled = styled(motion.svg).attrs(() => ({
  initial: "hidden",
  animate: "visible",
}))`
  display: flex;
  width: 100%;
  height: 10%;
`;

const AnimatedLine: React.FC = () => {
  return (
    <LineStyled viewBox="0 0 20 2">
      <motion.line
        x1="10"
        y1="0"
        x2="0"
        y2="0"
        stroke="#ff0055"
        strokeWidth={1.5}
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="10"
        y1="0"
        x2="20"
        y2="0"
        stroke="#ff0055"
        strokeWidth={1.5}
        variants={draw}
        custom={1}
      />
    </LineStyled>
  );
};

export default AnimatedLine;
