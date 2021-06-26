import React from "react";
import { ExperienceItem } from './components/ExperienceItem';
import resumeData from './constants/resumeData';
import { motion, AnimateSharedLayout } from "framer-motion";
import "./scss/pages/experience.scss";

export const Experience = () => {

  return (
    <section id="experience" className="jumbotron mt-5">
      <h1>Experience</h1>
      <div className="row">
        <div className="col-sm-4 offset-md-4">
          <AnimateSharedLayout>
            <motion.ul
              layout
              initial={{ borderRadius: 25 }}
              className="workList"
            >
              {resumeData['work'].slice(0, 3).map((item, i) => (
                <ExperienceItem key={i} item={item} />
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
              {resumeData['work'].slice(3, 6).map((item, i) => (
                <ExperienceItem key={i} item={item} />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </div>
      </div>
    </section>
  );
}
