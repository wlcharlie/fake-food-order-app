import classes from "./Input.module.css"

const Input = props => {
  return (
    <div className={classes.center + " " + classes[props.name]}>
      <i className={props.icon} />
      <label htmlFor={props.name}></label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.text}
      />
    </div>
  )
}

export default Input
