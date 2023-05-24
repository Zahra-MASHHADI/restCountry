import Header from "../mainPage/header";

export default function Layout({children}){
    return(
        <>
         <Header/>
            {children}
        </>
       

    )
}
