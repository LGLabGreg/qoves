import { useAnimate, motion } from "framer-motion";

import homeImage from "@/assets/home.jpg";
import { useEffect } from "react";
import { AnimatedText } from "@/components/animated-text";

import { serif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { cubicBezier } from "@/lib/animations";

const Home = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      ".image-container",
      { transform: "translateX(0)" },
      {
        duration: 1,
        ease: cubicBezier,
      }
    );
    animate(
      ".image-reveal",
      { width: 0 },
      {
        duration: 1,
        ease: cubicBezier,
      }
    );
    animate(
      ".content-box",
      { width: 312, height: 400 },
      {
        duration: 1,
        delay: 2,
        ease: cubicBezier,
      }
    );
  }, []);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="lg:flex h-screen"
      ref={scope}
    >
      <div className="lg:w-1/2 flex flex-col">
        <div className="flex h-[calc(100%-274px)]">
          <div className="w-[60%] p-6 flex justify-center flex-col">
            <AnimatedText
              el="p"
              text="Facial aesthetics"
              className="text-sm uppercase pl-[6px] tracking-wide"
              delay={1000}
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
              className="text-7xl tracking-tighter"
              delay={1000}
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
              delay={1200}
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
              delay={1000}
              animateLines={true}
            />
          </div>
        </div>
        <div className="flex h-[274px]">
          <div className="w-[60%] border-t p-6 flex justify-center items-end">
            <div className="bg-background-dark w-full h-[200px]"></div>
          </div>
          <div className="w-[40%] border-l p-6 border-t"></div>
        </div>
      </div>
      <div className="relative lg:w-1/2 transform translate-x-[100%] image-container">
        <div className="absolute z-10 bg-background top-0 left-0 w-[40%] h-full image-reveal"></div>
        <div
          className="w-full h-screen bg-cover bg-center aspect-square"
          style={{ backgroundImage: `url(${homeImage.src})` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 backdrop-filter backdrop-brightness-75 content-box"></div>
      </div>
    </motion.div>
  );
};

export default Home;
