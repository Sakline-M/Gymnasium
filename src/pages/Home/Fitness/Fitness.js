import React, { useEffect, useRef } from "react";
import ladyImg from "../../../assets/banner/lady.webp";
import fitness from "../../../assets/banner/Fitness card.jpg";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

const Fitness = () => {
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
    <div ref={ref} className="flex flex-row-reverse -mt-[77px]">
      <div className="w-1/2 pb-3 ">
        <img className="border-l-2 h-[400px]" src={fitness} alt="" />
      </div>
      <div className="w-1/2 px-[78px] pt-12">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="text-5xl font-bold">
          Fitness Is for Everyone
        </motion.h1>
        <motion.p
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-3">
          The Zest Fitness Studio is a 24/7, a multi-level facility that houses
          an expansive selection of equipment, the latest in group exercise
          classes, and resources for a complete wellness experience. We provide
          a friendly, welcoming atmosphere for all members of all fitness levels
          from beginners to PRO athletes. Whether your passion is, cardio,
          weight training, bodybuilding, powerlifting, CrossFit, or functional
          training; we have all the equipment and necessary machines you need
          for results. Come train with us!
        </motion.p>
        <motion.div
          ref={ref}
          variants={btnVariants}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-5">
          <Link className="cubtn1">Learn More</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Fitness;
