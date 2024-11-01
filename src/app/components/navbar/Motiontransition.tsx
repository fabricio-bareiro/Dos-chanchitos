"use client";
import { m, motion } from "framer-motion"
export const transitionsMotion = {
    transition: {
        duration:3,
        type: "spring"
    },
    initial: {
        opacity: 0,
        bottom: "5rem",
        transform: "translateY(200px)"
    },
    whileInView: {
        opacity: 1,
        transform: "translateY(0px)"   
    }
}
export const Motiontransition = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div
     transition={transitionsMotion.transition}
     initial={transitionsMotion.initial}
     whileInView={transitionsMotion.whileInView}
     >{children}</motion.div>
  )
}
