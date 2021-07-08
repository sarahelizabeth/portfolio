import React, { useState } from "react";
import { ExperienceItem } from './components/ExperienceItem';
import resumeData from './constants/resumeData';
import { motion, AnimateSharedLayout } from "framer-motion";
import "./scss/pages/experience.scss";

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const toggleActive = (itemIndex) => {
    if (activeIndex !== itemIndex) {
      setActiveIndex(itemIndex);
    }
  };

  return (
    <section id="experience" className="jumbotron mt-5">
      <h1>Experience</h1>
      <div className="row">
        <div className="col-sm-4">
          <AnimateSharedLayout>
            <motion.ul
              layout
              initial={{ borderRadius: 25 }}
              className="workList"
            >
              {resumeData['work'].slice(0, 2).map((item, i) => (
                <ExperienceItem
                  key={i}
                  item={item}
                  isOpen={i === activeIndex}
                  handleClick={() => toggleActive(i)}
                />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </div>
        <div className="col-sm-4">
          <AnimateSharedLayout>
            <motion.ul
              layout
              initial={{ borderRadius: 25 }}
              className="workList"
            >
              {resumeData['work'].slice(2, 4).map((item, i) => (
                <ExperienceItem
                  key={i + 2}
                  item={item}
                  isOpen={i + 2 === activeIndex}
                  handleClick={() => toggleActive(i + 2)}
                />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </div>
        <div className="col-sm-4">
          <AnimateSharedLayout>
            <motion.ul
              layout
              initial={{ borderRadius: 25 }}
              className="workList"
            >
              {resumeData['work'].slice(4, 6).map((item, i) => (
                <ExperienceItem
                  key={i + 4}
                  item={item}
                  isOpen={i + 4 === activeIndex}
                  handleClick={() => toggleActive(i + 4)}
                />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </div>
      </div>
    </section>
  );
}
