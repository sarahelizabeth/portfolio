import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export const ExperienceItem = ({ i, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className="workListItem" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout>
        <div className="avatar" />
        <h6>{item.name}</h6>
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

const items = [0, 1, 2];
