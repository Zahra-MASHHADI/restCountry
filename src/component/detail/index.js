import { useEffect, useState } from "react"
import request from "../uti"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import Layout from "../layout"
import Style from "./style"
import { NumericFormat } from "react-number-format"
import Border from "./border"

export default function Detail(){
    const [countryData , setCountryData] = useState([])
    const [info , setInfo] = useState(false)
    const {name} = useParams()
    useEffect(
        ()=>{
            api()
        }
    ,[name])
    async function api(){
        const response = await axios.get(`${request}/alpha/${name}`) 
        setCountryData(response.data)
        setInfo(true)
        
    }
  
    
    const languageCode = countryData[0]?.languages ? Object.keys(countryData[0]?.languages)[0] : null;
  
  const currenciess = countryData[0]?.currencies ? Object.keys(countryData[0]?.currencies)[0] : null;
  console.log(currenciess)
  return(
        
    <Layout>
        <Style>
            <Link to={`/`}>
        <button>
            <FontAwesomeIcon icon={faArrowLeftLong}/> Back
        </button>
            </Link>
        {info === true ?
        <div className="detail">
            <div className="flag">
                <img src={countryData[0].flags?.svg} /> 
            </div>
            <div className="info">
                <div className="infoDetail">
                    <h3>{countryData[0].name?.common}</h3>
                    <div className="list">
                        <ul>
                            <li>
                                <span>Native Name : </span> {countryData[0].name.nativeName[languageCode]?.common }
                            </li>
                            <li>
                            <span>Population : </span> <NumericFormat className="num" value={countryData[0].population} displayType="text" thousandSeparator=","/>
                            </li>
                            <li>
                            <span>Region : </span> {countryData[0].region}
                            </li>
                            <li>
                            <span>Subregion : </span> {countryData[0].subregion}
                            </li>
                            <li>
                            <span>Capital : </span> {countryData[0].capital}
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <span>top Level Domain : </span> {countryData[0].tld}
                            </li>
                            <li>
                            <span>Currencies : </span> {countryData[0].currencies[currenciess].name}
                            </li>
                            <li>
                            <span>Languages : </span> {countryData[0].languages[languageCode]}
                            </li>
                        </ul>
                    </div>
                    
                        
                    

                </div>
                <div className="border">
                    <Border array={countryData[0]}  />
                </div>
            </div>
          
              
        </div>
            :
            <p> loading... </p>
        }
        </Style>
        </Layout>
    )
}