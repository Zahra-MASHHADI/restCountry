import { faLightbulb, faMoon, faSun, faSunPlantWilt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";
import { useEffect, useState   } from "react";


export default function Header(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeLight() {
    document.body.classList.toggle('mode')
    setIsDarkMode(!isDarkMode);
  }
    return(
      <Style>
            <div className="header">
              <h3>
                Where in the world?
              </h3>
              <p onClick={changeLight} >
                {isDarkMode === false ?
                <>
                <FontAwesomeIcon icon={faMoon} />
                dark mode
                </>
                :
                <>
                <FontAwesomeIcon icon={faLightbulb} />
                light mode
                </>  
}
              </p>
          </div>
      </Style>
      
        
    )
}