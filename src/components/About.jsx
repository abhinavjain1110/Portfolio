import React from "react";
import  {Tilt}  from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from "../hoc";

const ServiceCard =({index,title,icon})=>{
    return(
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}
const About = () => {
    return(
       <>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mx-3 mt-2`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} mx-1`}>
            Overview.
        </h2>
        </motion.div>
        <motion.p variants={fadeIn("","",0.1,1)}
                  className="mt-4 mx-4 text-secondary text-[17px] max-w 3xl leading-[30px]">
        I am Abhinav Jain, a passionate and results-driven full-stack developer with a proven track record of delivering innovative web solutions. Proficient in ReactJS, NodeJS, ExpressJS, and MongoDB, I specialize in crafting seamless user experiences and scalable backend architectures. Pursuing a B.Tech in Computer Science at Galgotias University, where I maintain a stellar CGPA of 9/10, I’ve spearheaded diverse projects, from dynamic e-commerce platforms to blockchain-integrated applications. With a keen eye for detail and a commitment to excellence, I thrive in challenging environments that demand creative problem-solving, clean code, and cutting-edge technology. My work reflects a dedication to pushing boundaries and creating impactful digital experiences.
        </motion.p>
         <div className="mt-20 flex flex-wrap gap-10">
            {
                services.map((service,index)=>(
                    <ServiceCard key={service.title} index={index} {...service} />
                ))
            }
         </div>
       </>
    )
}

export default SectionWrapper(About,"about");