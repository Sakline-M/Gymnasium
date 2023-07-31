import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ClientCarusol from "./ClientCarusol";

const Clinets = () => {
  // ref
  const ref = useRef(null);

  // framer motion
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const imgVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const divVariants = {
    hidden: { opacity: 0, x: -70 },
    visible: { opacity: 1, x: 0 },
  };

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  // use Effect
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div className="mb-20">
      <motion.h1
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={mainControls}
        className="text-6xl font-bold text-center mt-14"
        transition={{ duration: 1.2, delay: 1 }}>
        OUR CLIENTS SAY
      </motion.h1>
      <div className="mt-10">
        <ClientCarusol
          ref={ref}
          imgVariants={imgVariants}
          divVariants={divVariants}
          mainControls={mainControls}
          ></ClientCarusol>
      </div>
    </div>
  );
};

export default Clinets;
