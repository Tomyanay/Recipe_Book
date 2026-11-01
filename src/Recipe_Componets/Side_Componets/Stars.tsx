
import {motion} from 'motion/react'
import { IoStar } from "react-icons/io5";

export function Stars({rating,index,childtag}:{rating:number,index:number,childtag:{hidden:{opacity:number},visable:{opacity:number}}}){

return(
   <motion.div  variants={childtag}className="my-1 ">
     <IoStar className={`${index+1<=rating ? 'text-warning' : ''}`}/>
   </motion.div>)
}

