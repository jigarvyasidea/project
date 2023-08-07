import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-yellow-300 tracking-[4px]">2014 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE - Mechanical Engineering"
            subTitle="Don Bosco Institute of Technology Bangalore (2018 - 2021)"
            result="7.13/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Diploma - Mechanical Engineering(Instrumentation)"
            subTitle="SJ(Govt)Polytechnic Bangalore (2015 - 2018)"
            result="75%"
            des="The diploma course is designed in such a way that students are capable of performing engineering tasks."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Mysemco Junior College Ammasandra (2014 - 2015)"
            result="72.16%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-yellow-300 tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Developer"
            subTitle="Rayabhari Technologies Pvt Ltd - (2022 - Present)"
            result="Bangalore"
            des="A Company which converts your ideas to software applcation using trending technologies. A Front-End Developer is someone who creates websites and web applications."
          />
          <ResumeCard
            title="Web Developement & Designing Intern"
            subTitle="The Sparks Foundation - (2021 - 2023)"
            result="Online"
            des="The Sparks Foundation. This brand new education nonprofit trying to sell students hope for successful future. they have created multiple programs to help students reach their maximum potential."
          />
          <ResumeCard
            title="HVAC - Design Intern"
            subTitle="Printon Smart Engineers - (2021 - 2021)"
            result="Bangalore"
            des="In Skill development and Training program for Engineering students in different domain. P S E is a Mechanical, Electrical and Plumbing Design consultancy, we design, build, construct, supply, install, service and upgrade of Electro-Mechanical Systems & Networks, Utilities and Equipment."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education