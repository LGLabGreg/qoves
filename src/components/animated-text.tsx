import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { cubicBezier } from "@/lib/animations";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  delay?: number;
  repeatDelay?: number;
  animateLines?: boolean;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: cubicBezier,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  delay,
  repeatDelay,
  animateLines,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      if (delay) {
        timeout = setTimeout(() => {
          show();
        }, delay);
      } else {
        show();
      }
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  if (animateLines) {
    return (
      <Wrapper className={className}>
        <span className="sr-only">{textArray.join(" ")}</span>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          aria-hidden
        >
          {textArray.map((line, lineIndex) => {
            return (
              <motion.span
                key={`${line}-${lineIndex}`}
                className="inline-block w-full"
                variants={animation}
              >
                {line}
              </motion.span>
            );
          })}
        </motion.span>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
