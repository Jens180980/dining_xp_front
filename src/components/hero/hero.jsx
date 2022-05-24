import { useContext } from "react"
import { generalContentCtx } from "../../App"
import { BACKEND_URL } from "../../config/config"
import './hero.scss'


const Hero = () => {
    const generalContent = useContext(generalContentCtx)
    const heroImg = generalContent?.[0].hero_image
    const heroImgURL = BACKEND_URL + '/assets/' + heroImg
    return (
        <div>
            <img src={heroImgURL} alt="hero image" />
            <h1 className="heroTxt">Find the best dining experiences in Aalborg</h1>
        </div>
    )   
}

export default Hero


