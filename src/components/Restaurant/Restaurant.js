import classes from "./Restaurant.module.css"

const Restaurant = props => {
  return <div className={classes.restaurant}>{props.children}</div>
}

export default Restaurant
