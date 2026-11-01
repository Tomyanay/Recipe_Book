
import { Outlet } from "react-router-dom"
import { Footerdata } from "../Footer_data"
import {motion} from 'motion/react'

/* Tailwind duplicates */

const Animated_Selection=`border-2 select-none bg-primary-light border-primary rounded-full md:w-35 md:h-35 md:text-base w-25 h-25 flex items-center text-center text-sm text-primary-dark`

const Animated_Text='[text-shadow:1px_1px_5px_(--color-bg)] font-extrabold'

function Layout() {
  return (
     <div className=" border-3 border-border rounded-lg mx-2 md:mx-10 mt-1 text-text shadow-[2px_2px_5px_(--color-primary),-2px_0px_5px_(--color-primary)]">
        <div className="bg-surface border-b-3  border-border rounded-t-lg"> 

            <h1 className=" text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-5 font-semibold">Recipe Book App</h1>

            <div className=" flex md:justify-around justify-between items-center"> 
              <motion.section  initial={{opacity:0,y:-120}} animate={{opacity:1,y:-20,rotate:10}}
                 transition={{duration:1.2, delay:.5,ease:'easeInOut'}} className={`ml-1 ${Animated_Selection}`}>
                <p className={`${Animated_Text}`} >The website for finding Recipes </p>
              </motion.section>

              <motion.section initial={{opacity:0,y:-120}} animate={{opacity:1,y:-20,rotate:-10}}
                 transition={{duration:1.2,delay:.5,ease:'easeInOut'}} className={`mr-1 ${Animated_Selection}`}>
                 <p className={`${Animated_Text}`}>With over 50 Recipes!!</p>
              </motion.section>
            </div>
        </div>

        <Outlet/>

        <footer className=" border-t-3  border-border flex flex-col items-center text-xl bg-surface  pt-2.5">
            <p className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold py-1">&copy; Tom Yanay 2025 - {new Date().getFullYear()}</p> 
            <div className="flex justify-evenly items-center">
              {Footerdata.map((value,index)=>
                <p key={index}>
                 <a href={value.source} target="_blank" title={value.title}>
                 <img className="w-15 h-15 border-3 border-border rounded-full m-1.5 hover:scale-110 hover:border-primary" src={value.url} alt={value.alt}/></a>
               </p>)} 
            </div>       
        </footer>
     </div>
  )
}

export default Layout
