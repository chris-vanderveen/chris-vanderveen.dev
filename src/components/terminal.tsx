import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Terminal = () => {
  const [clicked, setIsClicked] = useState(false);

  const toggleAnimation = () => {
    setIsClicked(!clicked);
  };

  return (
    <motion.div
      onClick={toggleAnimation}
      animate={{
        scale: clicked ? 0.8 : 1,
      }}
      transition={{ duration: 0.1 }}
      className="font-kodeMonoSemiBold mx-96 mt-64 grid min-h-96 rounded-lg bg-[#10100e]/80 text-3xl tracking-wide text-[#00cc88] shadow-md outline outline-2 outline-offset-1 outline-[#38393a]/80"
    >
      <div className="border-b-1 max-h-8 w-full rounded-t-lg border-black bg-[#191c1f]/80 shadow-md">
        <Image
          className="mb-2 ml-2 mt-2"
          src="/Iconless_Buttons.png"
          alt="buttons"
          width={51.7}
          height={16}
        />
      </div>
      <div className="ml-3 mt-3 flex h-max">
        <Image
          src="/terminal_prompt.png"
          alt="terminal prompt"
          width={180}
          height={60}
        />
        Hello, World!
      </div>
      <div className="ml-3 mt-5 flex h-max">
        <Image
          src="/terminal_prompt.png"
          alt="terminal prompt"
          width={180}
          height={40}
        />
        I'm Chris Vander Veen
      </div>
      <div className="mb-5 ml-3 mr-5 mt-5 flex h-max">
        <Image
          src="/terminal_prompt.png"
          alt="terminal prompt"
          width={180}
          height={40}
        />
        Aspiring Software Engineer
      </div>
    </motion.div>
  );
};

export default Terminal;
