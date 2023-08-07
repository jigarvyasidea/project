import React, { useEffect } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { InstagramOutlined } from "@ant-design/icons"
import { createFromIconfontCN } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LeftBanner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [text] = useTypewriter({
        words: ["Motivation Speaker.", "Mentor.", "Help You To Start Making Money Online.", "Believe in Growing Together."],
        loop: true,
        typeSpeed: 500,
        deleteSpeed: 50,
        delaySpeed: 4000,
    });

    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
            '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ],
    });

    return (
        <>
            <div className='w-full lgl:w-1/2 flex flex-col gap-20' data-aos="flip-up">
                <div className='flex flex-col gap-5 data-aos="flip-left"'>
                    <h4 className="text-lg font-normal ">About </h4>
                    <h1 className="text-6xl font-bold text-white">
                        Hii, I'm {" "}
                        <span className='text-yellow-300 capitalize'>Pinku Sharma</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>

                        {/* simple react type writer */}

                        a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="yellow"
                        />
                    </h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Mr. Pinku Sharma is a renowned motivational speaker and leadership coach who has delivered over 2000 speeches in India and abroad.
                        <p> He is well-known for his high-power leadership training programs that have transformed the lives of many individuals. </p>
                        <p>He has mentored more than 5 million people across India</p>
                    </p>
                    <a className="px-0" href='#'>
                        <button class=" rounded-md bg-rose-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <span className='text-white'>Connect Me </span>
                        </button>
                    </a>
                </div>
                <div className='flex flex-col lgl:flex-row gap-6 lgl:gap-0 justify-between'>
                    <div data-aos="fade-right">
                        <h2 className="text-base uppercase font-titleFont mb-3">
                            FIND ME IN
                        </h2>
                        <div className="flex gap-4">
                            <a href="#" className="bannerIcon">
                                <p className='text-white hover:text-yellow-400'><FaLinkedinIn /></p>
                            </a>
                            <a href='#' className="bannerIcon pb-2">
                                <p className='text-white hover:text-yellow-400'><InstagramOutlined /></p>
                            </a>
                            <a href='#' className="bannerIcon">
                                <p className='text-white hover:text-yellow-400'><FaFacebookF /></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftBanner;
