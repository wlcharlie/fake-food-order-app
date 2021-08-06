import { useMediaQuery } from "react-responsive"
import classes from "./Header.module.css"

import Button from "../UI/Button"
import Input from "../UI/Input"
import Img from "../UI/Img"
import React from "react"
import ButtonPopUp from "../UI/ButtonPopUp"

const Header = () => {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px" })

  return (
    <nav className={classes.header}>
      {isWidth768 ? (
        <React.Fragment>
          <div className={classes.upperNav}>
            <Button icon="fas fa-bars fa-lg" />
            <Img
              center="center"
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
              alt="logo"
            />
            <Button styles="cart" icon="fas fa-shopping-cart fa-lg" />
          </div>

          <div className={classes.downNav}>
            <ButtonPopUp styles="location" />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Button icon="fas fa-bars fa-lg" />
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
