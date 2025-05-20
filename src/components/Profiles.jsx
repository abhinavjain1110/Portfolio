import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { profile } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";

const ProjectCard =({index,name,description,tags,image,source_code_link})=>{
    return(
        <motion.div variants={fadeIn("up", "spring",index*0.5,0.75)}>
            <Tilt
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                />
                
                </div>

                <div onClick={()=> window.open(source_code_link,"_blank") } className="cursor-pointer">
                    <h3 className="text-white font-bold text-[24px] mt-1 ">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

            </Tilt>
        </motion.div>
    )}
 
const Profiles =()=>{
    return(
        <>
        <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} mt-2`}>My Profiles</p>
                <h2 className={styles.sectionHeadText}>Profiles</h2>
        </motion.div>
        <div className="w-full flex">
            <motion.p
            variants={fadeIn("","",0.1,1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
Explore my public profiles across various platforms, including GitHub, LinkedIn, LeetCode, and HackerRank, where I actively contribute to open-source projects, showcase my technical expertise, and engage in problem-solving challenges. These profiles highlight my passion for coding, continuous learning, and collaboration within the tech community            
        </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
                {profile.map((profile,index)=>(
                    <ProjectCard
                        key={`project-${index}`} 
                        index={index}
                        {...profile}
                        />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Profiles,"profile")
