import React, { useEffect } from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, Figma, data, portofilo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-block"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT Our Featured Events "
          des="My Events"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Ignite Your Network Marketing Passion!"
          des="Unleash your potential in direct selling! Learn from experts, master social media branding, and grow your business like never before. Join now!"
          src={projectOne}
          src1="#"
          src2="#"
          data-aos="fade-up"
        />
        <ProjectsCard
          title="Connect for Success in Network Marketing"
          des="Build authentic relationships for success! Learn effective communication, nurture your team, and create a thriving direct selling organization."
          src={projectTwo}
          src1="#"
          src2="#"
          data-aos="fade-up"
        />
        <ProjectsCard
          title="Master Your Mindset for Direct Selling Triumph"
          des="Conquer challenges with a winning mindset! Overcome self-doubt, set achievable goals, and embrace failure as a stepping stone to success. Join now!"
          src={projectThree}
          src1="#"
          src2="#"
          data-aos="fade-up"
        />
        <ProjectsCard
          title="Social Media Mastery: Accelerate Your Network Marketing Business"
          des="Get ahead with social media! Discover powerful strategies to boost your network marketing business. Learn from top influencers and maximize your online presence."
          src={portofilo}
          src1="#"
          src2="#"
          data-aos="fade-up"
        />
        <ProjectsCard
          title="Leadership Unleashed: Lead Your Network Marketing Team to Victory"
          des="Unlock your leadership potential! Learn to inspire and motivate your team, foster a positive work environment, and create a winning culture in direct selling."
          src={Figma}
          src1="#"
          src2="#"
          data-aos="fade-up"
        />
        <ProjectsCard
          title="Financial Freedom Through Network Marketing"
          des="Secure your financial future! Join our event to learn how network marketing can be your pathway to financial independence. Discover the steps to build a profitable business and achieve freedom."
          src={data}
          src1="#"
          src2="#"
          data-aos="fade-up"
        />
      </div>
    </section>
  );
}

export default Projects;
