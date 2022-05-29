import { useContext } from "react"
import { generalContentCtx } from "../../App"
import Hero from '../hero/hero.jsx'
import './home.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";


const Home = () => {
    const generalContent = useContext(generalContentCtx)
    const mapPosition = [57.0411, 9.9013] 
    const introduction = generalContent?.[0].introduction    
    
    return (
        <section>
            <Hero />
            <article>
                <h2>Introduction</h2>
                <p>{introduction}</p>
            </article>
            <article>
                <h2>Find your food</h2>
                <MapContainer className="map" center={mapPosition} zoom={13} scrollWheelZoom={false}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </article>
        </section>
    )   
}

export default Home