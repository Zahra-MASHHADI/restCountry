import styled from "styled-components";

const Style = styled.div`
input{
    margin:40px 0 10px 40px;
    width:400px;
    height:40px;
    border:none;
    box-shadow: 0 2px 5px 2px rgb(204, 204, 205 , 0.2);
}
ul{
    overflow-y: auto;
    overflow-x:hidden;
    max-height:150px;
    width:150px;
    position:absolute;
    background-color:#fff;
    padding: 5px 10px;
    box-shadow: 0 0 20px rgba(34, 36, 38, 15%);
            &::-webkit-scrollbar{
                width:10px;
            }
            &::-webkit-scrollbar-track{
                background:#ebebed;
            }
            &::-webkit-scrollbar-thumb{
                background:#acb2b2;
                border-radius:15px;
            }
    li{
        padding: 10px 0 2px 0;
        border-bottom: 1px solid #000;
        a{
            color:black;
        }
    }
}

`
export default Style