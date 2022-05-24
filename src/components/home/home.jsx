import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { generalContentCtx } from "../../App"
import Hero from '../hero/hero.jsx'
import './home.scss'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { getGeneralContent } from "../../helpers/apicalls"


const Home = () => {

    const [generalContent, setGeneralContent] = useState();
    const [mapPosition, setMapPosition] = useState()

    // Api calls   
    useEffect( () => {
        getGeneralContent().then((result) => {
            setGeneralContent(result.data.data)
            console.log(generalContent?.[0].map.coordinates.reverse())
        });  
           
        
    }, []);   

    // const generalContent = useContext(generalContentCtx)
    const introduction = generalContent?.[0].introduction
    // console.log(mapPosition)      
    
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