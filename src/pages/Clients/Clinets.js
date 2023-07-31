import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import model1 from "../../assets/model/comment 1.jpeg";
import model2 from '../../assets/model/ZEST CLIENT (1).webp'
import model3 from '../../assets/model/model 3.webp'
import model4 from '../../assets/model/comment 2.png'

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
    hidden: { opacity: 0, x: -80 },
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
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <AiOutlineRight
      id="transformedRightIcon"
      {...props}
    />
  );

  // for slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
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
      <div ref={ref} className="mt-10">
        <Slider {...settings} className="-mb-[6px] flex">
          <div className="relative">
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1 }}
              className="h-[400px] ml-[350px] rounded-[30px] "
              src={model1}
              alt=""
            />
            <motion.div
              variants={divVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1 }}
              className="w-[450px] bg-white text-black p-4 text-[20px] font-semibold absolute bottom-0 left-[620px] rounded-2xl
            ">
              <h1 className="z-10 w-[350px] mx-auto">
                Very happy with the facilities available here at Zest. The
                trainers are super helpful, especially Sandesh has been really a
                great guide in my fitness journey so far. Strongly recommended.
              </h1>
              <div className="h-[2px] w-[70px] bg-black ml-5 mt-3"></div>
              <h1 className="text-2xl font-bold mx-auto w-[450px] mt-1">
                Shamik Guha, Co-Founder & CEO @ Altor
              </h1>
            </motion.div>
          </div>
          <div ref={ref} className="relative">
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1 }}
              className="h-[400px] ml-[350px] rounded-[30px] "
              src={model2}
              alt=""
            />
            <motion.div
              variants={divVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1 }}
              className="w-[450px] bg-white text-black p-4 text-[20px] font-semibold absolute bottom-0 left-[620px] rounded-2xl
            ">
              <h1 className="z-10 w-[350px] mx-auto">
                One of the best gyms in HSR layout. Very well maintained and
                super high quality equipments. Most of all it is very spacious
                and amazing trainers. Strongly recommended.
              </h1>
              <div className="h-[2px] w-[70px] bg-black ml-5 mt-3"></div>
              <h1 className="text-2xl font-bold mx-auto w-[450px] mt-1">
                Sunil Kunar, Co-Founder & CEO @ BHUMIDO
              </h1>
            </motion.div>
          </div>
          <div ref={ref} className="relative">
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1 }}
              className="h-[400px] ml-[350px] rounded-[30px] "
              src={model3}
              alt=""
            />
            <motion.div
              variants={divVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1 }}
              className="w-[450px] bg-white text-black p-4 text-[20px] font-semibold absolute bottom-0 left-[620px] rounded-2xl
            ">
              <h1 className="z-10 w-[350px] mx-auto">
                Zest fitness studio is one of the best gym I have ever
                experienced. Exceptional trainers with a friendly environment,
                they pay attention towards each and every trainee. Love the way
                they handle things. Clean environment. A must recommended place
                to all the fitness freaks .go on lovely place
              </h1>
              <div className="h-[2px] w-[70px] bg-black ml-5 mt-3"></div>
              <h1 className="text-2xl font-bold mx-auto w-[450px] mt-1">
                Rohith Pandey, Co-Founder & CEO @ Revix Lighting
              </h1>
            </motion.div>
          </div>
          <div ref={ref} className="relative">
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1 }}
              className="h-[400px] ml-[350px] rounded-[30px] "
              src={model4}
              alt=""
            />
            <motion.div
              variants={divVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1 }}
              className="w-[450px] bg-white text-black p-4 text-[20px] font-semibold absolute bottom-0 left-[620px] rounded-2xl
            ">
              <h1 className="z-10 w-[350px] mx-auto">
                "Hi, I have been training at Zest Fitness Studio from last 2
                years. I have used 2 of their branches in HSR and my experience
                with them is amazing. they have all the equipments that is
                neccessary to work on your fitness goal. their trainers are very
                friendly and helpful, their Personal Trainers are very good.
                hope you all will join here and have amazing time."
              </h1>
              <div className="h-[2px] w-[70px] bg-black ml-5 mt-3"></div>
              <h1 className="text-2xl font-bold mx-auto w-[450px] mt-1">
                Michael Ajay, International Model
              </h1>
            </motion.div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Clinets;
