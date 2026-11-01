
import {useState} from "react"

import { useNavigate } from "react-router-dom";

import type { Recipe } from "../types";

import { useQuery } from "@tanstack/react-query";

import axios from 'axios'

import Recipe_Background from '../assets/Images/Recipe_Background.jpg'

import Recipe_Item from "./Recipe_Item";

/* Tailwind values*/

function Home() {
   
   const [data,setdata]=useState<Recipe[]>([]) 
   const nav=useNavigate() 

   /*Get Recipe Information */
   function Get_Recipe(recipe:Recipe){
    nav(`/recipe/${recipe.id}`)
  }

  async function Get_Recipes(){

    try{
      const response = await axios.get('https://dummyjson.com/recipes?limit=50')
      setdata(response.data.recipes)
      return ''
    }

    catch(err){if(err instanceof Error){return err.message}}   
  }

  /*Get Loading and errors from Api */
  const {isFetched,error}=useQuery({queryKey:['Recipe'],queryFn:Get_Recipes})

  return (
    <>
     {(isFetched && !error) &&(
     <div
      style={{backgroundImage:`url(${Recipe_Background})`}} 
      className=" bg-no-repeat bg-cover bg-clip-content h-230 overflow-y-auto no-Scrollbar ">
      {data.map((value)=><Recipe_Item key={value.id} Recipe={value} Get_Recipe={Get_Recipe}/>)}
    </div>
  )}
     {!isFetched &&(<p className="text-center m-5 text-xl md:text-2xl">Loading Recipes...</p>)}
     {error!==null &&(<p className="text-center m-5 text-xl md:text-2xl">{error.message}</p>)}
    </>
  )
}
export default Home




