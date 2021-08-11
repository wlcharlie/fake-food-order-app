import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { isMobile, isTablet } from "react-device-detect"
import classes from "./Header.module.css"

import Button from "../UI/Button"
import Input from "../UI/Input"
import Img from "../UI/Img"
import ButtonPopUp from "../UI/ButtonPopUp"
import Pop from "../UI/Pop"
import SideMenu from "../UI/SideMenu"

const Header = () => {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" })
  const [modal, setModal] = useState(null)

  const locationEvent = () => {
    setModal("location")
  }

  const sideMenuEvent = () => {
    setModal("sideMenu")
  }

  const closeEvent = () => {
    setModal(null)
  }

  return (
    <nav className={classes.header}>
      {modal === "location" && (
        <Pop onClick={closeEvent} show={modal === "location"} />
      )}
      <SideMenu onClick={closeEvent} show={modal === "sideMenu"} />
      {isWidth768 || (isMobile && !isTablet) ? (
        <React.Fragment>
          <div className={classes.upperNav}>
            <Button icon="fas fa-bars fa-lg" onClick={sideMenuEvent} />
            <Img
              center="center"
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
              alt="logo"
            />
            <Button styles="cart" icon="fas fa-shopping-cart fa-lg" />
          </div>
          <div className={classes.downNav}>
            <ButtonPopUp styles="location" onClick={locationEvent} />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Button icon="fas fa-bars fa-lg" onClick={sideMenuEvent} />
          <div />
          <Img
            center="center"
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
            alt="logo"
          />
          <div />
          <Button
            styles="location"
            icon="fas fa-map-marker-alt"
            text="太原路三段306號"
            time="Now"
            onClick={locationEvent}
          />
          <div />
          <Input
            type="text"
            name="search"
            icon="fas fa-search fa-lg"
            text="What are you craving?"
          />
          <div />
          <Button
            styles="cart"
            icon="fas fa-shopping-cart fa-lg"
            text="Cart"
            itemsCount="0"
          />
        </React.Fragment>
      )}
    </nav>
  )
}

export default Header
