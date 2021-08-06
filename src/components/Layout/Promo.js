import { useState, useReducer, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

import classes from "./Promo.module.css"

import PromoCard from "../UI/PromoCard"

const initPromos = data => {
  return data.map((e, i) => (
    <PromoCard data={data[i]} id={"card" + i} key={i} />
  ))
}

const Promo = props => {
  const scroll = event => {
    if (event.target.dataset.name === "rightBtn") {
      setPointer(prev => (prev += 1))
      setX(prev => prev - 100)
    } else {
      setPointer(prev => (prev -= 1))
      setX(prev => prev + 100)
    }
  }

  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" })

  const middle = isWidth768 ? 0 : -300
  const bound = isWidth768 ? 9 : 3

  const [promos] = useReducer(null, props.data, initPromos)
  const [x, setX] = useState(middle)
  const [time, setTime] = useState(0.5)
  const [pointer, setPointer] = useState(0)

  useEffect(() => {
    if (pointer === bound) {
      setTime(0)
      setTimeout(() => {
        setX(middle)
        setPointer(0)
      }, 500)
      setTimeout(() => {
        setTime(0.5)
      }, 600)
    }

    if (pointer === -bound) {
      setTime(0)
      setTimeout(() => {
        setX(middle)
        setPointer(0)
      }, 500)
      setTimeout(() => {
        setTime(0.5)
      }, 600)
    }

    // const data = promos.slice(0, 3)
    // dispatchPromos({ data: data })
    // for (let i = 0; i < 3; i++) {
    //   slide.current.appendChild(slide.current.children[0])
    // }
  }, [pointer])

  return (
    <div className={classes.container}>
      <button
        className={classes.rotate}
        id="left"
        data-name="leftBtn"
        onClick={scroll}
      >
        <i className="fas fa-arrow-left" data-name="leftBtn"></i>
      </button>
      <ul
        className={classes.promo}
        style={{
          transform: `translate(${x}%,0)`,
          transition: `transform ${time}s ease-in-out`,
        }}
      >
        {promos}
      </ul>
      <button
        className={classes.rotate}
        id="right"
        data-name="rightBtn"
        onClick={scroll}
      >
        <i className="fas fa-arrow-right" data-name="rightBtn"></i>
      </button>
    </div>
  )
}

export default Promo
