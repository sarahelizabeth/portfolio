import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ExperienceItem = ({ key, item, isOpen, handleClick }) => {
  return (
    <motion.li
      layout
      className="workListItem"
      onClick={handleClick}
      initial={{ borderRadius: 10 }}
    >
      <motion.div layout>
        <div className="avatar" />
        <h6 className="workTitle">{item.name}</h6>
      </motion.div>
      <AnimatePresence>{isOpen && <Content item={item} />}</AnimatePresence>
    </motion.li>
  );
}

function Content({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="workItem">
        <p>{item.title}</p>
      </div>
      <div className="workItem">
        <p>{item.start} to {item.end}</p>
      </div>
      <div className="workItem">
        <p>{item.description}</p>
      </div>
    </motion.div>
  );
}
