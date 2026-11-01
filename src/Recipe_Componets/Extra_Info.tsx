
import { Store } from "./Store";
import clsx from "clsx"
import { NavLink } from "react-router-dom"
import { IoMdArrowBack } from "react-icons/io";

/* tailwind Backgrounds */
const main_bg='bg-[linear-gradient(to_right,var(--color-warning),var(--color-primary),var(--color-primary-light),var(--color-primary-dark))]'
const Options_bg='bg-[linear-gradient(to_bottom_right,var(--color-primary),var(--color-primary-dark),var(--color-warning))]'
const title=`${Options_bg} border-2 rounded-lg my-10 mx-5 border-text text-center text-text select-none`

function Extra_Info() {

  const {recipe} = Store()

  if(recipe!==''){

    const Diff=clsx('',
      recipe.difficulty==='Easy' && '#6FBF73', 
      recipe.difficulty==='Medium' && '#F2C94C',
      recipe.difficulty==='Hard' && '#EB5757')

    const Time = clsx('',
    recipe.mealType[0] === 'Breakfast' && '#E6C59E',
     recipe.mealType[0] === 'Lunch' && '#10B981',
     recipe.mealType[0] === 'Dinner' && '#475569',
    (recipe.mealType[0] === 'Snack' || recipe.mealType[0] === 'Dessert') && '#EC4899',
     recipe.mealType[0] === 'Appetizer' && '#D97706',
   )
  
  return (
    <div className={`${main_bg} flex flex-col justify-between text-xl xl:text-2xl relative text-center `}>

      <header className="mt-15">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-10 ">{recipe.name}</h1>
        <NavLink className='flex items-center absolute top-3 left-3 text-xl lg:text-2xl' to={"/"}><IoMdArrowBack/>Back Home</NavLink>

        <div className="grid grid-cols-2 mx-0.5 sm:gap-5 sm:mx-[10%] text-lg sm:text-xl font-semibold">

         <section>
          <p>Difficulty to make <span style={{color:Diff}}>{recipe.difficulty}</span></p>
          <p className="my-5">Time to make:<span style={{color:Time}}>{recipe.cookTimeMinutes} Minutes</span></p>
         </section>

         <section >
          <p>from the <span style={{color:Time}}>{recipe.cuisine}</span> cuisine</p>
          <p className="my-5"> Total calories:<span style={{color:Time}}>{recipe.caloriesPerServing}</span></p>
         </section>

         <p className="col-span-2">Recommended to eat at <span style={{color:Time}}>{recipe.mealType[0]}</span></p>

        </div> 
      </header>

      <main className="mb-25">   

        <p className={`${title}`}> ingredents</p>
        <div className='list-decimal list-inside text-start my-5 '> 
          {recipe.ingredients.map((recipe,index)=>
           <li className="my-5 pl-10" key={index}>
            <a className="cursor-default" href={`https://www.youtube.com/results?search_query=${recipe}`} title='Click for extra information about the dish' target='_blank'>{recipe}</a>
           </li>)}
        </div>

        <p className={`${title}`}>instructions</p>
        <div className=' list-decimal list-inside text-start my-5 '>
          {recipe.instructions.map((instruction,index)=>
          <li className={`text-xl my-5 pl-10 text-text ${index+1===recipe.instructions.length ? 'pb-2' : ''}`} key={index}>{instruction}</li>)}
        </div>
      
          <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mt-15'>😋Have a good <span style={{color:Time}}>{recipe.mealType[0]}😋</span></h1>
      </main>

    </div>
  )
 }
}
export default Extra_Info