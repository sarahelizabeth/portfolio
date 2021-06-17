import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import resumeData from "./../constants/resumeData";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className="navlist" variants={variants}>
    {resumeData['navigation'].map((item, i) => (
      <MenuItem i={i} key={i} item={item} />
    ))}
  </motion.ul>
);
