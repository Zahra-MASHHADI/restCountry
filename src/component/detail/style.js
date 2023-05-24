import styled from "styled-components";

const Style = styled.div`
margin:20px 50px;
button{
    background-color:#fff;
    border-radius: 3px;
    border:none;
    padding:5px 20px;
    color:rgb(70 , 90 , 70);
    box-shadow: 0 2px 5px 1px rgba(34, 34, 34, 0.35);
    margin:50px 0;
    svg{
        color: rgb(70, 90, 70);
    }
}
.detail{
    display:flex;
    .flag{
        img{
            margin-top:15px;
            max-width:550px;
        }
    }
    .info{
        margin-left: 40px;
        span{
            font-weight:bold;
        }
        .infoDetail{
            h3{
                margin-left: 40px;
            }
            .list{
                display:flex;
                justify-content: space-between;
                ul{
                    li{
                        margin-top:10px;    
                        .num{
                            font-weight:400;
                        }
                    }
                }
            }
        }
        .border{
            margin-left: 40px;
            display:flex;
            gap:10px;
            flex-wrap:wrap;
            .borderCountry{
                display:flex;
                flex-wrap:wrap;
                gap:10px;
                div{
                    margin:0;
                    font-size:12px;
                    border: solid 1px #e3e0e0;
                    border-radius:3px;
                    padding: 1.5px 25px 0 25px;
                    a{
                        color:black;
                        p{
                            margin:0;
                        }
                    }
                }
            }
            
        }
    }
}
`
export default Style