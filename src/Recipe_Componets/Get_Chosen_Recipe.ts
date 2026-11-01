
import axios from 'axios'
import type { LoaderFunctionArgs } from 'react-router-dom';
import { Store } from './Store';


async function Get_Chosen_Recipe({params}:LoaderFunctionArgs) {
    const {recipe_id}=params
    try{
        const response = await axios.get(`https://dummyjson.com/recipes/${recipe_id}`)
        Store.getState().setrecipe(response.data)
    }

    catch(error){
        if(error instanceof Response){throw error}
        if(axios.isAxiosError(error)){throw new Response(error.message,{status:404})}
        else{throw new Response('Network Error',{status:500})}
    }
  
}


export default Get_Chosen_Recipe