import React, { useEffect, useRef } from "react";
import ladyImg from "../../../assets/banner/lady.webp";
import fitness from '../../../assets/banner/Fitness card.jpg'
import { Link } from "react-router-dom";
import { motion ,useAnimation, useInView } from "framer-motion";

const Exprence = () => {
  // ref
  const ref = useRef(null);

  // framer motion
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const btnVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  // use Effect
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="mb-20">
      <div className="flex mt-3">
        <div className="w-1/2">
          <img className="border-r-2 h-[400px] " src={ladyImg} alt="" />
        </div>
        <div className="w-1/2 px-20 pt-16">
          <motion.h1
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.2, delay: 0.25 }}
            className="text-5xl font-bold">
            The Zest Experience
          </motion.h1>
          <motion.p
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-3">
            The zest fitness studio has a wide range of experience in delivering
            the best services that the fitness lifestyle needs. we have more
            than 5 years of experience and have 4 branches in Bangalore. our
            ultimate goal is to contribute the best services to the fitness
            community and make difference in people's lifestyles.
          </motion.p>
          <motion.div
            ref={ref}
            variants={btnVariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.2, delay: 1.25 }}
            className="mt-5">
            <Link className="cubtn1">Learn More</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Exprence;
