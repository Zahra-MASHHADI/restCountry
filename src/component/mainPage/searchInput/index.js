import axios from "axios"
import request from "../../uti"
import { useState } from "react"
import { typeOf } from "react-is"
import { useRef , useEffect} from "react"
import { Link, useParams } from "react-router-dom"
import Style from "./style"

export default function Search(){
    const [searchResult , setSearchResult] = useState([])
    const [searchQuery , setSearchQuery] = useState("")
    const [loading , setLoading] = useState(false)
    const [showSearchResult , setShowSearchResult] = useState(true)
    const input = useRef(null)

    useEffect(() => {

      }, []);

    async function api(e) {
      
      setSearchQuery(e.target.value)
      const response = await axios.get(`${request}all` , {params:{search:e?.target.value}});
      setSearchResult(response.data) 
      
     
  }
          function render(){
            const result = searchResult.filter((item) => {
              return item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
            })
            return result.map((item)=>{
               { return searchQuery !== "" ? (
                        <li  key={item.cca3}>
                          <Link to={`/name/${item.cca3}`}>
                          {item.name.common}
                          </Link>
                        </li>
               )
                        :
                        null
              }
                  
            })
            }
    return(
        <Style>
        <input type="text" onChange={api} ref={input} placeholder="Search for a country"></input>
        {searchQuery !== "" ? <ul id="hi" style={{display:"block"}}>
        {render()}
          </ul>
          : <ul id="hi" style={{display:"none" }} />
           }
        </Style>
        
    )
}