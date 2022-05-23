import { useContext } from "react";
import { generalContentCtx } from "../../App";


const Header = () => {
    const generalContent = useContext(generalContentCtx)
   
    console.log(generalContent?.[0].menu_items.menu)
      


   
    const siteLogo = require('../../assets/img/logo.png')

    return (
        <header>
            <div>
                <img src={siteLogo} alt="logo" />
            </div>
            <nav>
                <ul>
                {/* { menuItems.map((item, index) => <li key={index}> {item}</li>) }  */}
                </ul>
            </nav>
        </header>
    )
}

export default Header