import React, { useState } from "react"
import classes from "./Button.module.css"

const clickPrice = (target, setFn) => {
  switch (target) {
    case "I":
      setFn(prevState => {
        return {
          ...prevState,
          I: !prevState.I,
        }
      })
      break
    case "II":
      setFn(prevState => {
        return {
          ...prevState,
          II: !prevState.II,
        }
      })
      break
    case "III":
      setFn(prevState => {
        return {
          ...prevState,
          III: !prevState.III,
        }
      })
      break
    case "IV":
      setFn(prevState => {
        return {
          ...prevState,
          IV: !prevState.IV,
        }
      })
      break
    default:
      break
  }
}

const clickDiet = (target, setFn) => {
  switch (target) {
    case "dirt":
      setFn(prevState => {
        return {
          ...prevState,
          dirt: !prevState.dirt,
        }
      })
      break
    case "bomb":
      setFn(prevState => {
        return {
          ...prevState,
          bomb: !prevState.bomb,
        }
      })
      break
    case "pig":
      setFn(prevState => {
        return {
          ...prevState,
          pig: !prevState.pig,
        }
      })
      break
    default:
      break
  }
}

const Button = props => {
  const [price, setPrice] = useState({
    I: false,
    II: false,
    III: false,
    IV: false,
  })
  const [diet, setDiet] = useState({
    dirt: false,
    bomb: false,
    pig: false,
  })
  const click = event => {
    clickPrice(event.target.dataset.context, setPrice)
    clickDiet(event.target.dataset.context, setDiet)
  }

  return (
    <React.Fragment>
      {props.styles === "filterButton" && (
        <div>
          <button
            className={
              price[props.context] || diet[props.context]
                ? `${classes[props.styles]} ${classes.clicked}`
                : `${classes[props.styles]}`
            }
            onClick={click}
            data-name={props.styles}
            data-context={props.context}
          >
            {props.icon && (
              <i
                className={props.icon}
                data-name={props.styles}
                data-context={props.context || ""}
              ></i>
            )}
            {props.text}
          </button>
        </div>
      )}
      {props.styles !== "filterButton" && (
        <div
          className={`${props.styles === "promo" ? "" : classes.center} ${
            props.styles === "cart" && classes.cartRight
          }`}
        >
          <button className={classes[props.styles]}>
            {props.image && (
              <img
                src={
                  require(`../../images/category/${props.image}.png`).default
                }
                // src={props.image}
                alt="category"
              />
            )}
            {props.icon && <i className={props.icon}></i>}
            {props.text && <div>{props.text}</div>}
            {props.time && <div>．{props.time}</div>}
            {props.itemsCount && <div>．{props.itemsCount}</div>}
          </button>
        </div>
      )}
    </React.Fragment>
  )
}

export default Button
