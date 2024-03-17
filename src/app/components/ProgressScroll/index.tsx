'use client'

import {
  motion,
  LazyMotion,
  domAnimation,
  useTransform,
  useScroll,
} from 'framer-motion'
import { useEffect } from 'react'

export default function ProgressScroll() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0])
  useEffect(() => {
    console.log('scrollYProgress changed')
  }, [scrollYProgress])

  return (
    <>
      <LazyMotion features={domAnimation}>
        <motion.div
          style={{
            zIndex: 100,
            scaleX,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            borderRadius: '8px',
            background: '#fff',
          }}
        ></motion.div>
      </LazyMotion>
    </>
  )
}
