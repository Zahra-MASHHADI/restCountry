import styled from "styled-components";
const Style = styled.div`
    .searchFilter{
        display:flex;
        justify-content: space-between;
        select{
            width:150px;
            height:40px;
            border:none;
            margin:40px 40PX 10px 0;
            box-shadow: 0 2px 5px 2px rgb(204, 204, 205 , 0.2);
            padding:10px;
        }
    }
    .list{
        display:flex;
        justify-content: space-between;
        flex-wrap:wrap;
        margin:20px 20px;
        .country{        
            box-shadow: 0 2px 5px 1px rgba(34, 34, 34, 0.1);
            border-radius:4px;
            height:300px;
            width:250px;
            background-color:#fff;
            margin:20px 25px;

            img{
                width:100%;
                height:40%;
                border-top-left-radius:4px ;
                border-top-right-radius:4px ;
            }
            a{
                color:black;
            }
            .detail{
                margin:0 20px;
                .name{
                    font-weight:bold;
                }
               .num{
                font-weight:350;
               }
                span{
                    font-weight:bold;
                }
            }
        }
    }
}
@media screen and (max-width:380px){
    .searchFilter{
       flex-wrap:wrap;
       input{
        margin:40px 0 5px 0;
        width:300px;
       }
       select{
        margin:20px 40PX 10px 0;
        box-shadow: 0 2px 5px 2px rgb(204, 204, 205 , 0.2);
       
    }
    }
}
`
export default Style