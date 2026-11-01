
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Layout from "./Recipe_Componets/Layout"
import Error from "./Recipe_Componets/Error"
import Home from "./Recipe_Componets/Home"
import Extra_Info from "./Recipe_Componets/Extra_Info"
import Get_Chosen_Recipe from "./Recipe_Componets/Get_Chosen_Recipe"

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} errorElement={<Error/>}>
      <Route index element={<Home/>}/>
      <Route path="/recipe/:recipe_id" element={<Extra_Info/>} loader={Get_Chosen_Recipe}/>
    </Route>))


function App() {
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
