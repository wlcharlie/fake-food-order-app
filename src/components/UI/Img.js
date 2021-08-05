import classes from "./Img.module.css"

const Img = props => {
  return (
    <img
      className={`${classes[props.center]} ${classes[props.size]}`}
      src={props.src}
      alt={props.alt}
    />
  )
}

export default Img
