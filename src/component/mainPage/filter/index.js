import { useEffect, useState } from "react"
import Mainpage from ".."

export default function Filter({array}){
    const [select , setSelect] = useState('all')
    
    function render(e){
       
        setSelect(e.target.value)
        console.log(select)
        const filteredArray = 
      array.filter((item) => item.continents === select);
    filteredArray.map((item) => (
        <li key={item.cca3}>{item.name.common}</li>
      ))
    }
    
    useEffect(
        ()=>
  console.log(select)
    ,[select])
    return(
        <>
        <select onChange={render} value={select}>
            <option value={"all"} >
                all
            </option>
            <option value={"asia"}>
                asia
            </option>
            <option value={"euorpe"} >
            euorpe
           </option>
           <option value={"america"}>
            america
        </option>
        <option value={"africa"}>
            africa
        </option>
        <option value={"oceania"}>
            oceania
        </option>
        </select>
        
        </>
        
    )
}