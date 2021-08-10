import React from "react"
import ReactDOM from "react-dom"
import classes from "./Pop.module.css"
import Button from "../UI/Button"

const Cover = () => {
  return <div className={classes.cover} />
}

const Modal = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.grid}>
        <i
          className={`fas fa-times fa-lg ${classes.close}`}
          onClick={props.onClick}
        ></i>
        <h2>外送詳細資訊</h2>
        <div className={classes.flex}>
          <i class="fas fa-map-marker-alt fa-lg"></i>
          <Button styles="filterButton" text="變更" />
        </div>
        <div className={classes.flex}>
          <div className={classes.flex_text}>
            <i class="fas fa-clock fa-lg"></i>
            <h4>立刻</h4>
          </div>
          <Button styles="filterButton" text="安排時間" />
        </div>
        <button className={classes.done} onClick={props.onClick}>
          DONE
        </button>
      </div>
    </div>
  )
}

const Pop = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Cover />, document.getElementById("cover"))}
      {ReactDOM.createPortal(
        <Modal onClick={props.onClick} />,
        document.getElementById("pop-modal")
      )}
    </React.Fragment>
  )
}

export default Pop
