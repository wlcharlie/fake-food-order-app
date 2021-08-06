import FilterForm from "./FilterForm"
import classes from "./Filter.module.css"
import { useMediaQuery } from "react-responsive"

const Filter = () => {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <div className={classes.contain}>
      <div className={classes.stick}>
        <h4 className={classes.title}>所有餐廳門市</h4>
        <div className={isWidth768 && classes.popUpForm}>
          {isWidth768 && <i className="fas fa-filter"></i>}
          <div className={isWidth768 && classes.gridForm}>
            <FilterForm types="radio" />
            <FilterForm types="priceRange" />
            <FilterForm types="dietLimit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
