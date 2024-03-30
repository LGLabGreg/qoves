import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { useAnimate, motion, cubicBezier } from "framer-motion";

const preloaderWidth = 244;

interface PreloaderProps {
  setLoaded: Dispatch<SetStateAction<boolean>>;
}

const Preloader = ({ setLoaded }: PreloaderProps) => {
  const [scope, animate] = useAnimate();
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    animate(
      scope.current,
      { width: preloaderWidth },
      {
        duration: 2,
        ease: cubicBezier(0.77, 0.1, 0.28, 0.94),
        onUpdate(latest) {
          setCurrentValue(Math.round(latest));
          if (latest === preloaderWidth) {
            setLoaded(true);
          }
        },
      }
    );
  }, []);

  return (
    <motion.div
      key="peloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex min-h-screen items-center justify-center"
    >
      <div className="relative">
        <div className="relative w-[244px] h-[8px]">
          <div className="bg-background-grey h-full absolute inset-0"></div>
          <div
            ref={scope}
            className="bg-background-medium h-full absolute inset-0 w-0"
          ></div>
        </div>

        <motion.div
          style={{ left: currentValue }}
          className="absolute left-0 top-[calc(100%+4px)] transform -translate-x-1/2 text-xs font-semibold"
        >
          <div className="w-[2px] h-[8px] bg-background-grey mb-[2px] relative left-1/2 -translate-x-[2px]"></div>
          <div>{Math.round((currentValue * 100) / preloaderWidth)}%</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
