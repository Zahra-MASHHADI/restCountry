import React from "react";
import{ Fragment, useEffect, useState } from "react";
import request from "../uti";
import axios from "axios";
import Header from "./header";
import Style from "./style";
import { NumericFormat } from "react-number-format";
import Search from "./searchInput";
import { Link } from "react-router-dom";
import Filter from "./filter";

export default function Mainpage(){
    useEffect(
        ()=> {getApi()}
        ,[])
    const [country , setCountry] = useState([])
    const[getinfo , setGotinfo] = useState(false)
    const[select , setSelect] = useState("All")
    async function getApi(e){
        const response = await axios.get(`${request}all`)
        setGotinfo(true)
            setCountry(response.data)
            console.log(e)
    }
    function render(){
       return country.filter((item)=>{
        return (
            item.region == select || select == "All"
            )
    }).map((item)=>{
        const{name , population , region , altSpellings , capital , flags , cca3 } = item
    return(
       
       <div key={flags.png} className="country">
        <Link to={`/name/${cca3}`}>
            <img src={flags.png} alt={flags.alt} /> 
            <div className="detail">
            {name.common.length > 35 ? <p className="name"> {altSpellings[0]} </p>  : <p className="name"> {name.common} </p> }
                <p> <span>population:</span> <NumericFormat className="num" displayType="text" value={population} thousandSeparator=","  /> </p>
                <p> <span>region:</span>{region} </p>
                <p> <span>capital:</span>{capital} </p>
            </div>
            
        </Link>
       </div> 
    )
       }
       )
    }
    function renderFarm(e){
        setSelect(e.target.value)
        console.log(select)
    }
    return(
        <Style>
                <Header/>
                <div className="container">
                    <div className="searchFilter">
                        <Search/>
                        <select onChange={renderFarm} value={select}>
                            <option value={"All"}>
                            Filter by reigon
                            </option>
                            <option value={"Asia"}>
                                Asia
                            </option>
                            <option value={"Europe"} >
                                Europe
                            </option>
                            <option value={"Americas"}>
                                Americas
                            </option>
                            <option value={"Africa"}>
                                Africa
                            </option>
                            <option value={"Oceania"}>
                                Oceania
                            </option>
                        </select>
                    </div>
                <div className="list">
                    {render()}
                </div>
            </div>
       
       
        </Style>
    )
   
}