import React from "react";
import { useState } from "react";
import { ExperienceItem } from './components/ExperienceItem';
import resumeData from './constants/resumeData';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./scss/pages/experience.scss";

export const Experience = () => {
  return (
    <section id="experience" className="container mt-5">
      <h1>Experience</h1>
      <div className="row">
        <AnimateSharedLayout>
          <motion.ul layout initial={{ borderRadius: 25 }}>
            {resumeData['work'].map((item, i) => (
              <ExperienceItem key={i} item={item} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </section>
  );
}
