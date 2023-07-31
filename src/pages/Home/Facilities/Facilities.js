import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bag from "../../../assets/facilities/bag.jpeg";
import tire from "../../../assets/facilities/tire.jpg";
import team from "../../../assets/facilities/team.jpg";
import matine from "../../../assets/facilities/matine.jpeg";
import gym from "../../../assets/facilities/gym.webp";
import tredmil from "../../../assets/facilities/tredmil.jpeg";
import { useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Facilities = () => {
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

  // function
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <AiOutlineLeft id="transformedLeftIcon" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <AiOutlineRight id="transformedRightIcon" {...props} />
  );

  // use Effect
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div ref={ref} className="mt-32">
      <motion.h1
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay: 1 }}
        className="text-6xl font-bold text-center my-10">
        TOP NOTCH FACILITIES
      </motion.h1>
      <div>
        <Slider {...settings} className="-mb-[6px] relative">
          <div>
            <img className="w-[440px] h-[340px] mx-auto " src={bag} alt="" />
          </div>
          <div className="w-[440px] h-[340px]">
            <img className="w-[440px] h-[340px] mx-auto " src={tire} alt="" />
          </div>
          <div>
            <img className="w-[440px] h-[340px] mx-auto " src={team} alt="" />
          </div>
          <div>
            <img
              className="w-[440px] h-[340px] mx-auto "
              src={tredmil}
              alt=""
            />
          </div>
          <div>
            <img className="w-[440px] h-[340px] mx-auto " src={matine} alt="" />
          </div>
          <div>
            <img className="w-[440px] h-[340px] mx-auto " src={gym} alt="" />
          </div>
        </Slider>
      </div>
      <motion.div
        variants={btnVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="mt-5 flex justify-center mb-10">
        <Link className="cubtn1">View All</Link>
      </motion.div>
    </div>
  );
};

export default Facilities;
