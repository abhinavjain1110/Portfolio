import { BallCanvas } from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import {fadeIn, textVariant} from '../utils/motion'

const Tech =()=>{
    return(
        
        <>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mx-3 mt-2`}>My Skills</p>
        <h2 className={`${styles.sectionHeadText} mx-1`}>
            Technologies.
        </h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
            {technologies.map((technology) =>(
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                    <p className={`${styles.sectionSubText}`} align="center">{technology.name}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default SectionWrapper(Tech,"");
