import React from "react"

import classes from "./ButtonPopUp.module.css"

const ButtonPopUp = props => {
  return (
    <React.Fragment>
      {props.styles === "location" && (
        <div className={classes.location} onClick={props.onClick}>
          <span>現在．中興路225號</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      )}
    </React.Fragment>
  )
}

export default ButtonPopUp
