import styled from "styled-components"
const Style = styled.div`
.header{
    display:flex;
    justify-content: space-between;
    box-shadow: 0 2px 5px 1px rgba(64,60,67,.16);
    background-color:#fff;
    h3 , p{
        margin:20px 30px;
    }
    
    
}
@media screen and (max-width:380px){
    .header{
       width:100%;
        h3 , p{
            margin:20px 10px;
        }
    }
}
`
export default Style