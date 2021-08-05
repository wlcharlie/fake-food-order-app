import classes from "./PromoCard.module.css"
import styled from "styled-components"

import Button from "./Button"

const Card = styled.li`
  position: relative;
  width: calc(30vw - 24px);
  height: 12vw;
  min-width: 150px;
  min-height: 110px;
  border-radius: 0.5rem;
  object-fit: cover;
  background-size: 100%;
  background-image: ${props =>
      props.data.title &&
      "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),"}
    url(${props => props.data.image});

  color: white;

  &:hover {
    cursor: pointer;
  }

  & button {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }

  & h3 {
    font-size: 2vw;
  }

  & h6 {
    font-size: 0.7vw;
  }

  & h3,
  & h6 {
    padding: 1rem 0 0 1rem;
  }
`

const PromoCard = props => {
  return (
    <div className={classes.slide} id={props.id}>
      <Card data={props.data}>
        <h3>{props.data.title}</h3>
        <h6>{props.data.subTitle}</h6>
        {props.data.title && <Button styles="promo" text="Order Now ->" />}
      </Card>
    </div>
  )
}

export default PromoCard
