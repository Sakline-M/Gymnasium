import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  client1,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client2,
  client20,
  client21,
  client22,
  client23,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
} from "../../../components/Callback";

const Transformed = () => {
  // ref
  const ref = useRef(null);
  const [start, setStart] = useState(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <AiOutlineLeft
      id="transformedLeftIcon"
      {...props}
      style={currentSlide === 0 ? { display: "none" } : { display: "block" }}
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <AiOutlineRight
      id="transformedRightIcon"
      {...props}
      style={currentSlide === 19 ? { display: "none" } : { display: "block" }}
    />
  );

  // for slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="mt-20">
      <motion.h1
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={mainControls}
        className="text-6xl font-bold text-center"
        transition={{ duration: 1.2, delay: 1 }}>
        100+ LIVES TRANSFORMED
      </motion.h1>
      <div className="mt-10">
        <Slider {...settings}>
          <div className="px-1">
            <img src={client1} alt="" />
          </div>
          <div className="px-1">
            <img src={client2} alt="" />
          </div>
          <div className="px-1">
            <img src={client3} alt="" />
          </div>
          <div className="px-1">
            <img src={client4} alt="" />
          </div>
          <div className="px-1">
            <img src={client5} alt="" />
          </div>
          <div className="px-1">
            <img src={client6} alt="" />
          </div>
          <div className="px-1">
            <img src={client7} alt="" />
          </div>
          <div className="px-1">
            <img src={client8} alt="" />
          </div>
          <div className="px-1">
            <img src={client9} alt="" />
          </div>
          <div className="px-1">
            <img src={client10} alt="" />
          </div>
          <div className="px-1">
            <img src={client11} alt="" />
          </div>
          <div className="px-1">
            <img src={client12} alt="" />
          </div>
          <div className="px-1">
            <img src={client13} alt="" />
          </div>
          <div className="px-1">
            <img src={client14} alt="" />
          </div>
          <div className="px-1">
            <img src={client15} alt="" />
          </div>
          <div className="px-1">
            <img src={client16} alt="" />
          </div>
          <div className="px-1">
            <img src={client17} alt="" />
          </div>
          <div className="px-1">
            <img src={client18} alt="" />
          </div>
          <div className="px-1">
            <img src={client19} alt="" />
          </div>
          <div className="px-1">
            <img src={client20} alt="" />
          </div>
          <div className="px-1">
            <img src={client21} alt="" />
          </div>
          <div className="px-1">
            <img src={client22} alt="" />
          </div>
          <div className="px-1">
            <img src={client23} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Transformed;
