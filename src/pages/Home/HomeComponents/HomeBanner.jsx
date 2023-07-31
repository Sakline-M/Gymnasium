import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  // ref
  const ref = useRef();

  //   framer motion
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    scroll : {opacity : 1, x : 10}
  };
  const btnVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };
  
 const isInView = useInView(ref, { once: true });
const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className={`cusHomeBannerImg h-[100vh]`}>
      <div className="text-center pt-[22%] text-white">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 1 }}
          className={`  text-center opacity-75`}>
          <h1 className="text-[62px] font-bold">
            YOUR RESULTS JUST GOT EASIER{" "}
          </h1>
          <h1 className="text-[62px] font-bold">WITH ZEST FITNESS STUDIO </h1>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 1.5 }}
          className={`  text-center opacity-75`}>
          <h1 className="mt-20 text-3xl font-bold">
            The fitness facility for all of your needs
          </h1>
        </motion.div>
        <motion.div
        ref={ref}
          variants={btnVariants}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: .8 }}
          className="mt-5">
          <Link className="cubtn1 ">Join Now</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBanner;
