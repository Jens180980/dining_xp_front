import { useContext } from "react"
import { restaurantCtx } from "../../App"
import { BACKEND_URL } from "../../config/config"
import './reviews.scss'


const Reviews = () => {
const restaurantData = useContext(restaurantCtx)

    return (
        <section>
            <h1>Read all the restaurant reviews</h1>
            <div>
                {restaurantData.map((item, index) => {
                    return (
                        <figure>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <img src={BACKEND_URL + '/assets/' + item.image} alt={item.name} />
                        </figure>
                    )
                })}
            </div>
        </section>
    )   
}

export default Reviews