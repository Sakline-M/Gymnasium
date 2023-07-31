import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import slideImg1 from "../../../assets/gym_equipment/gest1.png";
import slideImg2 from "../../../assets/gym_equipment/gest 2.png";
import slideImg3 from "../../../assets/gym_equipment/gest 3.png";
import slideImg4 from "../../../assets/gym_equipment/gest 4.png";
import slideImg5 from "../../../assets/gym_equipment/gest 5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Branchs = () => {
  // ref
  const ref = useRef(null);

  //   slide
  const slideSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  // framer motion
  const variants = {
    hidden: { opacity: 0, x: -100 },
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
    <div ref={ref}>
      <div>
        <motion.h1
          variants={variants}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="text-7xl font-bold text-center">
          OUR BRANCHES
        </motion.h1>
      </div>
      <div className="mt-3">
        <Slider {...slideSettings}>
          <div className="pr-1 ease-in cursor-pointer duration-200 hover:blur-[2px] hover:duration-200 hover:ease-in">
            <img className="w-[500px]  h-[270px]" src={slideImg1} alt="" />
          </div>
          <div className="pr-1 ease-in duration-200 cursor-pointer  hover:blur-[2px] hover:duration-200 hover:ease-in">
            <img className="w-[500px] h-[270px]" src={slideImg2} alt="" />
          </div>
          <div className="pr-1 ease-in duration-200 cursor-pointer hover:blur-[2px] hover:duration-200 hover:ease-in">
            <img className="w-[500px] h-[270px]" src={slideImg3} alt="" />
          </div>
          <div className="pr-1 ease-in duration-200 cursor-pointer hover:blur-[2px] hover:duration-200 hover:ease-in">
            <img className="w-[500px] h-[270px]" src={slideImg4} alt="" />
          </div>
          <div className="pr-1 ease-in duration-200 cursor-pointer hover:blur-[2px] hover:duration-200 hover:ease-in">
            <img className="w-[500px] h-[270px]" src={slideImg5} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Branchs;
