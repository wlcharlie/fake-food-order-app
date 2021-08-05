import FilterForm from "./FilterForm"
import classes from "./Filter.module.css"

const Filter = () => {
  return (
    <div className={classes.contain}>
      <h4 className={classes.title}>所有餐廳門市</h4>
      <FilterForm types="radio" />
      <FilterForm types="priceRange" />
      <FilterForm types="dietLimit" />
    </div>
  )
}

export default Filter
