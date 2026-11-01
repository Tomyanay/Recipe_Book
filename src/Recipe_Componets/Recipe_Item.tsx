

import type { Recipe } from "../types"

import {useState} from "react"

import  {clsx}  from "clsx";

import {motion} from 'motion/react'

import type { Variants } from "motion/react";

import { Stars } from "./Side_Componets/Stars";

/* Motion values */
 const parenttag:Variants={
  hidden:{opacity:0},
  visable:{opacity:1,
    transition:{
      staggerChildren:.5,
      duration:1,
      ease:'easeInOut'}}}

 const childtag={
    hidden:{opacity:0},
    visable:{opacity:1}
 }

const background=' bg-[linear-gradient(to_right,var(--color-danger),var(--color-primary-dark),var(--color-primary),var(--color-primary-light))]'
const textShadow='[text-shadow:0px_1px_1px_(--color-text-muted)] shadow-[2px_2px_10px_(--color-primary-dark),-2px_-2px_10px_(--color-primary-dark)]'

function Recipe_Item({Recipe,Get_Recipe}:{Recipe:Recipe,Get_Recipe:(recipe:Recipe)=>void}) {

    const [ispressed,set_pressed]=useState(false)

    const rate=clsx(
        Math.floor(Recipe.rating) === 1 && 'rgb(201, 34, 34)',        
        Math.floor(Recipe.rating) === 2 && 'rgb(250, 163, 0)',    
        Math.floor(Recipe.rating) === 3 && 'rgb(245, 241, 9)',     
        Math.floor(Recipe.rating) === 4 && 'rgb(41, 202, 41)', 
        Math.floor(Recipe.rating) === 5 && 'rgba(10, 240, 10, 0.897)')

  return (
     <motion.div whileHover={{scale:1.05}} transition={{type:'spring', stiffness:100}} 
      onClick={()=>{Get_Recipe(Recipe)}}
      className={`flex flex-col sm:flex-row sm:justify-between items-center mx-[3%] my-10 rounded-xl ${background} ${textShadow}`}>
      <img draggable={false} className=" w-45 h-45 rounded-xl m-5 select-none" src={Recipe.image} alt="dish"/>
      <p className="text-xl lg:text-2xl font-semibold text-center">{Recipe.name}</p>

      <div className={`${ispressed ? 'sm:mt-5' :  'mt-0'} mx-10 text-center text-lg lg:text-xl cursor-pointer select-none `} onClick={(e)=>{e.stopPropagation();set_pressed(ip=>!ip)}} title="Click to See/Hide Rating">
        <p className="my-2 md:my-0 hover:text-bg"> See Rating of {Recipe.reviewCount+1} Reviewers</p>

        {ispressed && (
          <div className=" flex flex-col items-center justify-center ">
            <motion.div variants={parenttag} initial='hidden' animate='visable' className=" flex space-x-1.5 my-1 ">
             {new Array(5).fill('').map((_,index)=><Stars key={index} index={index} rating={Math.floor(Recipe.rating)} childtag={childtag}/>)}
            </motion.div>
            <p className="font-semibold " style={{color:rate}}>{Math.floor(Recipe.rating)} Out of 5 stars</p>
          </div>)} 
      </div>
    </motion.div>
  )
}

export default Recipe_Item