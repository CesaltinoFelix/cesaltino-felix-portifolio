"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Web Development',
       description: "I develop functional and responsive websites using modern technologies like HTML, CSS, JavaScript, React, Angular, and Node.js, ensuring speed and SEO optimization.",
        href: '' 
    },
    {
        num: '02',
        title: 'UI/UX Design',
       description: "I create intuitive and attractive interfaces, focusing on usability and user experience through wireframes and prototypes.",
        href: '' 
    },
    {
        num: '03',
        title: 'Logo Design',
       description: "I design unique logos that capture the essence of your brand, ensuring versatility and visual impact.",
        href: '' 
    },
    {
        num: '04',
        title: 'SEO',
        description: "I optimize websites to improve search engine visibility, increasing organic traffic with effective SEO strategies.",
        href: '' 
    },
   ]

const Services = ()=> {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center xl:pb-8 py-8 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                {services.map((service, index)=>{
                    return (
                        <div 
                        key={index} 
                        className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <div 
                                className="text-5xl font-extrabold 
                                text-transparent text-outline 
                                group-hover:text-outline-hover 
                                transition-all duration-500"
                                >
                                    {service.num}
                                </div>
                                <Link 
                                href={service.href}
                                className="w-[70px] h-[70px] rounded-full bg-white 
                                group-hover:bg-accent trasition-all duration-500
                                flex justify-center items-center hover:-rotate-45"
                                >
                                <BsArrowDownRight className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            {/* Title */}
                            <h1 className="text-[42px] font-bold leading-none text-white group-hover:text-accent  transition-all duration-500">{service.title}</h1>
                            {/* Description */}
                            <p className="text-white/60">{service.description}</p>
                            {/* Border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    );
                })}
                </motion.div>
            </div>
        </section>
    );
}

export default Services