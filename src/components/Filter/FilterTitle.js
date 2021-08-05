import classes from "./FilterTitle.module.css"

const FilterTitle = props => {
  return (
    <div className={classes.subTitle}>
      <h6>{props.subTitle}</h6>
      <i className="fas fa-chevron-down"></i>
    </div>
  )
}

export default FilterTitle
