import { useContext } from "react";
import { generalContentCtx } from "../../App";
import { BACKEND_URL } from "../../config/config";
import './footer.scss'

const Footer = () => {
    const generalContent = useContext(generalContentCtx)
    const siteLogo = generalContent?.[0].logo
    const siteLogoURL = BACKEND_URL + '/assets/' + siteLogo 

    return (
        <footer>
            <div>
                <img src={siteLogoURL} alt="logo" />
            </div>
            <h2>This is a very cool footer</h2>
        </footer>
    )   
}

export default Footer