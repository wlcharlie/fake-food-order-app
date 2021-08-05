import classes from "./Header.module.css"

import Button from "../UI/Button"
import Input from "../UI/Input"
import Img from "../UI/Img"

const Header = () => {
  return (
    <nav className={classes.header}>
      {/* 功能選單 + LOGO + 地址 + SEARCH BAR+ CART */}

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
    </nav>
  )
}

export default Header
