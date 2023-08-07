import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-yellow-300 tracking-[4px]">2021 - 2023</p>
                    <h2 className="text-4xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Front-End Developer"
                        subTitle="Rayabhari Technologies Pvt Ltd - (2022 - Present)"
                        result="Bangalore"
                        des="A Company which converts your ideas to software applcation using trending technologies. A Front-End Developer is someone who creates websites and web applications."
                    />
                    <ResumeCard
                        title="Web Developement & Designing Intern"
                        subTitle="The Sparks Foundation - (2012 - 2016)"
                        result="Online"
                        des="The Sparks Foundation. This brand new education nonprofit trying to sell students hope for successful future. they have created multiple programs to help students reach their maximum potential."
                    />
                    <ResumeCard
                        title="Intern HVAC - Design"
                        subTitle="Printon Smart Engineers - (2021 - 2021)"
                        result="Bangalore"
                        des="In Skill development and Training program for Engineering students in different domain."
                    />
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-yellow-300 tracking-[4px]">2021 - 2022</p>
                    <h2 className="text-4xl font-bold">Non-Tech Experience</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BDE Intern"
                        subTitle="CUVETTE TECH PRIVATE LIMITED (2022 - 2022)"
                        result="Bangalore"
                        des="Cuvette is a career app for all college students. Promoting of MERN Stack Course for College Students "
                    />
                    <ResumeCard
                        title="Business Development Intern"
                        subTitle="InMoVidu Technologies Pvt Limited (2022 - 2022)"
                        result="Bangalore"
                        des="InMovidu is a owsm platform for engineering students that holds students hand from entering in college till intern and jobs offer . Specially faculties are owsm ..."
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;