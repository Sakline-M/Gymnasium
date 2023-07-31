import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const YouTubeVideo = () => {
  // ref
  const ref = useRef(null);
  

  // framer motion
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  // use Effect
  useEffect(() => {
    if(isInView){
        mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="flex justify-center items-center h-[80vh] ">
      <iframe
        className="cusBor1"
        width="750"
        height="380"
        src="https://www.youtube.com/embed/eZqLOtwB094?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </motion.div>
  );
};

export default YouTubeVideo;
