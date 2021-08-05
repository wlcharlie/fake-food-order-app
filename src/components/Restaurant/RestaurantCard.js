// TODO:use dummy data~
import React from "react"
import classes from "./RestaurantCard.module.css"

const RestaurantCard = () => {
  const dummy = Array.from({ length: 30 }, (v, i) => (
    <div className={classes.card}>
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
      <i className={`far fa-heart ${classes.heart}`} />
      <div className={classes.infoSection}>
        <div>
          <h3>田園舒食炒飯</h3>
          <h6>
            <i class="fas fa-ticket-alt" />
            ．15-20分鐘．$
          </h6>
        </div>
        <div className={classes.rate}>4.8</div>
      </div>
    </div>
  ))

  return <React.Fragment>{dummy}</React.Fragment>
}

export default RestaurantCard
