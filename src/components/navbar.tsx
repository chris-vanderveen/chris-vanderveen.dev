import React from "react";
import { motion } from "framer-motion";
import AnimatedLine from "./animated-line";

const Navbar = () => {
  return (
    <div className="font-satoshiBold mx-auto mt-8 flex space-x-24 text-xl text-[#ffffe3] subpixel-antialiased">
      <div className="flex min-w-24">
        <motion.button
          whileHover={{
            scale: 1.25,
            transition: {
              duration: 0.4,
              type: "spring",
            },
          }}
        >
          About Me
          <AnimatedLine />
        </motion.button>
      </div>

      <div className="min-w-24">
        <motion.button
          whileHover={{
            color: "#ff0055",
            scale: 1.25,
            transition: {
              duration: 0.5,
              type: "spring",
            },
          }}
        >
          Portfolio
          <AnimatedLine />
        </motion.button>
      </div>

      <div className="min-w-24">
        <motion.button
          whileHover={{
            scale: 1.25,
            transition: {
              duration: 0.4,
              type: "spring",
            },
          }}
        >
          Contact
          <AnimatedLine />
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
