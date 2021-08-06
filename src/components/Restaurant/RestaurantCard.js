// TODO:use dummy data~
import React, { useEffect, useState } from "react"
import classes from "./RestaurantCard.module.css"
import { fetchRestaurants } from "../../api/Restaurants"

const RestaurantCard = () => {
  const [data, setData] = useState([])
  useEffect(async () => {
    const res = await fetchRestaurants()
    await console.log(res.data.data)
    await setData(res.data.data)
  }, [])

  let dummy = ""

  if (!data.length) {
    dummy = <div>loading...</div>
  } else {
    dummy = data.map(
      e =>
        e.location_id !== "293919" && (
          <div className={classes.card} key={e.location_id}>
            <img
              src={
                e.photo
                  ? e.photo.images.large.url
                  : "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              alt="???"
            />
            <i className={`far fa-heart ${classes.heart}`} />
            <div className={classes.infoSection}>
              <div>
                <h3>{e.name}</h3>
                <h6>
                  <i class="fas fa-ticket-alt" />
                  {`．${e.num_reviews * 5}-${e.num_reviews * 10}分鐘．${
                    e.price_level.split("-")[0] || "$"
                  }`}
                </h6>
              </div>
              <div className={classes.rate}>{e.rating}</div>
            </div>
          </div>
        )
    )
  }
  return <React.Fragment>{dummy}</React.Fragment>
}

export default RestaurantCard
