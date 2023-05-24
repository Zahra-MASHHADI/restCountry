import { Link } from "react-router-dom"
export default function Border({array}){ 
    function render(){
         return array.borders?.map((border)=>{
            console.log(border)
            return(
                <div key = {border}>
                    <Link to={`/name/${border}`}> <p>{border}</p></Link>
                </div>
                )
            }) 
           
        
    }
    return(
        <>
        <span> Border Countries : </span> 
        <div className="borderCountry">
        {render()}
        </div>
        
        </>
  
    )
}