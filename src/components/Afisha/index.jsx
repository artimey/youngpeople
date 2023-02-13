import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import React, { useRef } from 'react'
import './styles.scss'
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => {
    return `${wrap(-0, -200, v)}%`
  });


  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className=''>{children} </span>
        <span className=''>{children} </span>
        <span className=''>{children} </span>
      </motion.div>
    </div>
  );
}

export const Afisha = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-wrapper__first-half ">
        <span className='megaFontAfisha'>АФИША</span>
      </div>

      <div className="ticker-wrapper__second-half">
        <span className='megaFontAfisha'>АФИША</span>
      </div>
    </div>
  )
}
