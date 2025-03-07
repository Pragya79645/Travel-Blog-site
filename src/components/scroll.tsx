"use client";
import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react";
  import { FiArrowDown } from "react-icons/fi";
  
  export const VelocityHero = () => {
    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    return (
      <section
        ref={targetRef}
        className="h-[20vh] bg-black-50 text-white-950 w-full  "
      >
        <div className="sticky top-0 flex h-60vh flex-col justify-between overflow-hidden" >
          
          <CenterCopy />
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-7xl font-black uppercase leading-[0.85] md:text-9xl md:leading-[0.85]"
          >
            Nothing in this world can take the place of persistence. Talent will
            not; nothing is more common than unsuccessful men with talent. Genius
            will not; unrewarded genius is almost a proverb. Education will not;
            the world is full of educated derelicts. Persistence and determination
            alone are omnipotent. The slogan &apos;Press On!&apos; has solved and always
            will solve the problems of the human race.
          </motion.p>
          <ScrollArrow />
        </div>
      </section>
    );
  };
  
  
  

  
  
  const CenterCopy = () => {
    return (
      <div className="flex items-center justify-center px-4">
      
      
      </div>
    );
  };
  
  const ScrollArrow = () => {
    return (
      <>
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block w-full">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto" />
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto" />
        </div>
      </>
    );
  };