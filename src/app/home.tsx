import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import homeImage from "@/assets/home.jpg";
import { AnimatedText } from "@/components/animated-text";

import { serif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { cubicBezier } from "@/lib/animations";

interface ContainerDimensionsProps {
  width: number;
  height: number;
}

const Home = () => {
  const [imageContainerDimensions, setImageContainerDimensions] =
    useState<ContainerDimensionsProps>({ width: 0, height: 0 });
  const [contentBoxContainerDimensions, setContentBoxContainerDimensions] =
    useState<ContainerDimensionsProps>({ width: 0, height: 0 });

  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const contentBoxContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imageContainerRef.current) {
      setImageContainerDimensions({
        width: imageContainerRef.current.clientWidth,
        height: imageContainerRef.current.clientHeight,
      });
    }
    if (contentBoxContainerRef.current) {
      setContentBoxContainerDimensions({
        width: contentBoxContainerRef.current.clientWidth,
        height: contentBoxContainerRef.current.clientHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageContainerRef]);

  const handleResize = () => {
    if (imageContainerRef.current) {
      setImageContainerDimensions({
        width: imageContainerRef.current.clientWidth,
        height: imageContainerRef.current.clientHeight,
      });
    }
    if (contentBoxContainerRef.current) {
      setContentBoxContainerDimensions({
        width: contentBoxContainerRef.current.clientWidth,
        height: contentBoxContainerRef.current.clientHeight,
      });
    }
  };

  function onContentBoxUpdate(latest: { width: number; height: number }) {
    setContentBoxContainerDimensions({
      width: Math.round(latest.width),
      height: Math.round(latest.height),
    });
  }

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="lg:flex h-screen"
    >
      <div className="lg:w-1/2 flex flex-col">
        <div className="flex h-[calc(100%-274px)]">
          <div className="w-[60%] p-6 flex justify-center flex-col">
            <AnimatedText
              el="p"
              text="Facial aesthetics"
              className="text-sm uppercase pl-[6px] tracking-wide"
              animation={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: cubicBezier,
                  },
                },
              }}
            />
            <AnimatedText
              el="p"
              text={["Experts in facial", "beauty making"]}
              className="text-7xl tracking-tighter leading-none"
              animateLines={true}
              animation={{
                hidden: {
                  opacity: 0,
                  x: -500,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                    ease: cubicBezier,
                  },
                },
              }}
            />
            <AnimatedText
              el="p"
              text={["Straightforward"]}
              className={cn("text-7xl italic", serif.className)}
              delay={200}
              animateLines={true}
              animation={{
                hidden: {
                  opacity: 0,
                  x: -500,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                    ease: cubicBezier,
                  },
                },
              }}
            />
          </div>
          <div className="w-[40%] border-l p-6 flex items-end">
            <AnimatedText
              el="p"
              text={[
                `Profesional facial`,
                "assessments and clear",
                "visualizations to make the",
                "journey easier.",
              ]}
              className="text-2xl text-foreground-muted"
              animateLines={true}
            />
          </div>
        </div>
        <div className="flex h-[274px]">
          <div className="w-[60%] border-t p-6 flex justify-center items-end">
            <div className="relative w-full h-[200px] flex flex-col py-3 px-5 text-white">
              <motion.div
                animate={{
                  width: "100%",
                }}
                transition={{ duration: 1, ease: cubicBezier }}
                className="absolute inset-0 h-full w-0 bg-background-dark"
              ></motion.div>
              <div className="border-b border-white/40 z-10 pb-4 flex items-center">
                <AnimatedText
                  el="p"
                  text={["Assess", "my", "face"]}
                  className="text-4xl font-light"
                  delay={200}
                  animateLines={true}
                  animation={{
                    hidden: {
                      opacity: 0,
                      y: 40,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        ease: cubicBezier,
                      },
                    },
                  }}
                />
                <motion.span
                  animate={{
                    left: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1, delay: 0.2, ease: cubicBezier }}
                  className="relative opacity-0 -left-[200px] ml-auto mt-1"
                >
                  <ArrowForwardIcon fontSize="large" />
                </motion.span>
              </div>
              <div className="mt-auto text-white/40 z-10">
                <AnimatedText
                  el="p"
                  text={[
                    "By clicking begin you agree",
                    "to the privacy policy regarding the",
                    "usage of your images for your report",
                  ]}
                  className="text-sm text-white/40"
                  animateLines={true}
                  breakLines={true}
                />
              </div>
            </div>
          </div>
          <div className="w-[40%] border-l p-6 border-t"></div>
        </div>
      </div>
      <motion.div
        animate={{
          transform: "translateX(0)",
        }}
        transition={{ duration: 1, ease: cubicBezier }}
        className="relative lg:w-1/2 transform translate-x-[100%] image-container"
        ref={imageContainerRef}
      >
        <motion.div
          animate={{
            width: 0,
          }}
          transition={{ duration: 1, ease: cubicBezier }}
          className="absolute z-10 bg-background top-0 left-0 w-[40%] h-full image-reveal"
        ></motion.div>
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${homeImage.src})` }}
        ></div>
        <motion.div
          animate={{
            width: 312,
            height: 400,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1, ease: cubicBezier }}
          className="absolute overflow-hidden top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 spin-container p-[1px] z-[1] opacity-0"
        >
          <div className="spinning-border z-[2]"></div>
          <div className="relative w-full h-full  z-[3]"></div>
        </motion.div>

        <motion.div
          animate={{
            width: 310,
            height: 398,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1, ease: cubicBezier }}
          onUpdate={onContentBoxUpdate}
          className="absolute overflow-hidden top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 z-[10] content-box opacity-0"
          ref={contentBoxContainerRef}
        >
          <div className="w-[20px] h-[20px] top-0 left-0 absolute border-t-[2px] border-l-[2px] border-white z-10"></div>
          <div className="w-[20px] h-[20px] right-0 bottom-0 absolute border-b-[2px] border-r-[2px] border-white z-10"></div>
          <div
            className="bg-cover bg-center absolute"
            style={{
              backgroundImage: `url(${homeImage.src})`,
              width: `${imageContainerDimensions.width}px`,
              height: `${imageContainerDimensions.height}px`,
              left: `-${
                (imageContainerDimensions.width -
                  contentBoxContainerDimensions.width) /
                2
              }px`,
              top: `-${
                (imageContainerDimensions.height -
                  contentBoxContainerDimensions.height) /
                2
              }px`,
            }}
          ></div>
          <div className="absolute w-full h-full inset-0 backdrop-filter backdrop-brightness-[65%] p-5 pb-2 flex flex-col text-white">
            <AnimatedText
              el="p"
              text={["Nose", "assessment", "report"]}
              className="text-3xl leading-7 "
              delay={1000}
              animateLines={true}
              breakLines={true}
              animation={{
                hidden: {
                  opacity: 0,
                  x: -500,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                    ease: cubicBezier,
                  },
                },
              }}
            />
            <div className="relative mt-auto">
              <motion.div
                animate={{
                  width: 270,
                  left: 0,
                }}
                transition={{ duration: 0.6, delay: 2.3, ease: cubicBezier }}
                className="absolute w-0 h-[1px] bg-white/50 top-0 left-[25%]"
              ></motion.div>
              <div className="flex pt-2 uppercase">
                <div className="w-1/3">
                  <div className="text-white/60 leading-3">Period/</div>
                  <div className=" text-lg">2 weeks</div>
                </div>
                <div className="w-1/3">
                  <div className="text-white/60 leading-3">Parts/</div>
                  <div className=" text-lg">8</div>
                </div>
                <div className="w-1/3">
                  <div className="text-white/60 leading-3">Pages/</div>
                  <div className=" text-lg">112</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
