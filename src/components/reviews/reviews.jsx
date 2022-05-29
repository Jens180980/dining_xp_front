import { useContext, useState, useEffect } from "react"
import { restaurantCtx } from "../../App"
import { BACKEND_URL } from "../../config/config"
import { getRestaurants } from "../../helpers/apicalls"
import './reviews.scss'


const Reviews = () => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {

          getRestaurants().then((apiRestaurants) => {
            setRestaurants(apiRestaurants.data.data);
          });
    
      }, []);

// const restaurants = useContext(restaurantCtx)

    return (
        <section>
            <h1>Read all the restaurant reviews</h1>
            <div>
                {restaurants.map((item, index) => {
                    return (
                        <figure key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <img src={BACKEND_URL + '/assets/' + item.image} alt={item.name} />
                            <h4>Restaurant review</h4>
                            <p>{item.review}</p>
                            <h4>Score: {item.score} / 4</h4>
                        </figure>
                    )
                })}
            </div>
        </section>
    )   
}

export default Reviews