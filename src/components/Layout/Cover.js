import classes from "./Cover.module.css"

const Cover = props => {
  return (
    <div
      className={`${classes.cover} ${props.show && classes.show}`}
      onClick={props.onClick}
    />
  )
}

export default Cover
