
import {create} from 'zustand'
import type { store } from '../types'
import { persist } from "zustand/middleware"

export const Store=create<store>()(persist((set)=>({
  recipe:'',
  setrecipe:(new_recipe)=>set({recipe:new_recipe})}),
 {name:'Recipe'}))
