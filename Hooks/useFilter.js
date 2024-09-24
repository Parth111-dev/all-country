import { useState } from "react"
import { CountriesList } from "../Components/CountriesList"

export function useFilter() {
    console.log(CountriesList);
    
    // <input onChange={(e)=> setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..."/>
    // const [query, setQuery] = useState("")  

    // countriesData.filter((country) =>        
    //     country.name.common.toLowerCase().includes(query) 
    //   )
    // console.log(query);
    
}