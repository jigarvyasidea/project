import React, { useEffect } from 'react';
import { AiFillAppstore, } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id='features'
      className="w-full py-20 border-b-[1px] border-b-black"
      data-aos="fade-up"
    >
      <Title title="Features" des="We Are On a Mission" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Problem"
          des="People for the whole life Working for a company and struggling to generate enough money to live a supreme lifestyle"
          icon={<FaBars />}
          data-aos="flip-down"
        />
        <Card
          title="Mission"
          des="To help 1 Million Working Professionals to build a digital business online, so they can generate MSI and live a supreme digital lifestyle."
          icon={<AiFillAppstore />}
          data-aos="fade-up"
        />
        <Card
          title="Vision"
          des="Search engine optimization regulations always evolve; Make your website fast, easy To empower every people of our community, so they can generate multiple sources of income building a digital asset. to find, and reach the widest audience possible."
          icon={<SiProgress />}
          data-aos="flip-up"
        />
      </div>
    </section>
  )
}

export default Features;
