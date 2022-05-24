import { useContext } from "react";
import { generalContentCtx } from "../../App";
import { BACKEND_URL } from "../../config/config";
import './header.scss'

const Header = () => {
    const generalContent = useContext(generalContentCtx)
    const menuItems = generalContent?.[0].menu_items.split(',')
    const menuRoutes = generalContent?.[0].menu_routes.split(',')
    const siteLogo = generalContent?.[0].logo
    const siteLogoURL = BACKEND_URL + '/assets/' + siteLogo 

    return (
        <header>
            <div>
                <img src={siteLogoURL} alt="logo" />
            </div>
            <nav>
                <ul> 
                {   
                    menuItems ? 
                    menuItems.map((item, index) => {
                    return <li key={index}><a href={menuRoutes[index]}>{item}</a></li>
                    })
                    : null
                }
                </ul>
            </nav>
        </header>
    )   
}

export default Header