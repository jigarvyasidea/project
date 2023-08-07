import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);
    return (
        <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
            <a className=" flex justify-end items-center text-center" href='Chandan HM - BE.pdf' download="Chandan HM - BE.pdf">
                <button class="rounded-br-lg bg-yellow-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="text-white fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span className='text-white'>Resume/CV</span>
                </button>
            </a>
            <div className="flex justify-center items-center text-center">
                <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <li
                        onClick={() =>
                            setEducationData(true) &
                            setSkillData(false) &
                            setExperienceData(false) &
                            setAchievementData(false)
                        }
                        className={`${educationData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >
                        Education
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(true) &
                            setExperienceData(false) &
                            setAchievementData(false)
                        }
                        className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
                            } resumeLi`}
                    >
                        Professional Skills
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setExperienceData(true) &
                            setAchievementData(false)
                        }
                        className={`${experienceData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >
                        Experience
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setExperienceData(false) &
                            setAchievementData(true)
                        }
                        className={`${achievementData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >
                        Achievements
                    </li>
                </ul>
            </div>
            {educationData && <Education />}
            {skillData && <Skills />}
            {achievementData && <Achievement />}
            {experienceData && <Experience />}

        </section>
    );
}

export default Resume