import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div>
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-yellow-300 tracking-[4px]">2021 - 2023</p>
                    <h2 className="text-4xl font-bold">Awards</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="College Delegate."
                        subTitle="Cuvette."
                        result="Success"
                        des="College Delegate for MEME-a-Thon Contest held on Instagram!"
                    />
                    <ResumeCard
                        title="Spotify App Workshop."
                        subTitle="Cuvette."
                        result="Success"
                        des="Live coding workshop conducted by Cuvette Tech!"
                    />
                    <ResumeCard
                        title="Bussiness Development."
                        subTitle="Cuvette."
                        result="Success"
                        des="Cuvette is a career app for all college students. Promoted a MERN-Devlopment Cources in Cuvette!"
                    />
                </div>
            </div>
            <div>
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-yellow-300 tracking-[4px]">2022 - 2023</p>
                    <h2 className="text-4xl font-bold">Certifications</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Java Full Stack Development."
                        subTitle="KODNEST."
                        result="Success"
                        des="KodNest is an edutech platform for skill development and job aspirants.!"
                    />
                    <ResumeCard
                        title="MERN Stack Development."
                        subTitle="UDEMY."
                        result="Success"
                        des="MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js.!"
                    />
                    <ResumeCard
                        title="REACT JS Development."
                        subTitle="GREAT LEARNING."
                        result="Success"
                        des="React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.!"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Achievement;