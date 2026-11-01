
export type Footerdata_type={
    source:string,
    title:string,
    url:string,
    alt:string
}

export type Recipe={
    caloriesPerServing:number,
    cookTimeMinutes:number,
    cuisine:string,
    difficulty:string,
    image:string,
    ingredients:string[],
    instructions:string[],
    mealType:string[],
    name:string,
    rating:number,
    reviewCount:number,
    id:number
}

export type store={
    recipe:Recipe | ''
    setrecipe:(recipe:Recipe)=>void
}