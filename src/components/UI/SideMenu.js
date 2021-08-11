import React from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
import Cover from "../Layout/Cover"
import classes from "./SideMenu.module.css"

const Modal = props => {
  return (
    <div className={`${classes.sideMenu} ${props.show && classes.show}`}>
      <div className={classes.contain}>
        <button className={classes.login}>LOGIN</button>
        <h6>
          <Link to="/admin">後臺登入</Link>
        </h6>
        <h6>註冊為企業夥伴</h6>
        <h6>成為合作外送夥伴</h6>
      </div>
    </div>
  )
}

const SideMenu = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Cover show={props.show} onClick={props.onClick} />,
        document.getElementById("cover")
      )}
      {ReactDOM.createPortal(
        <Modal show={props.show} />,
        document.getElementById("pop-modal")
      )}
    </React.Fragment>
  )
}

export default SideMenu
