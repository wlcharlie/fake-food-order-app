import classes from "./MainTwoSection.module.css"

const MainTwoSection = props => {
  return <div className={classes.section}>{props.children}</div>
}

export default MainTwoSection
