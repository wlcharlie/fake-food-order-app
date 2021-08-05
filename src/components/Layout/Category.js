// TODO: try using useReducer

import { useState, useEffect } from "react"

import classes from "./Category.module.css"

import Button from "../UI/Button"

const processCategory = (width, data) => {
  const rule = ~~(width / 120)
  const count = rule > data.length ? data.length : rule < 10 ? 8 : rule

  return data.slice(0, count).map(e => {
    const text = e
      .split("_")
      .map(e => e[0].toUpperCase() + e.substring(1))
      .join(" ")

    return (
      <Button
        styles="category"
        // image={`https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/${e}.png`}
        // image={`../../images/category/${e}.png`}
        image={e}
        text={text}
        key={e}
      />
    )
  })
}

const Category = props => {
  const [category, setCategory] = useState(
    processCategory(window.innerWidth, props.data)
  )

  useEffect(() => {
    const process = () => {
      setCategory(processCategory(window.innerWidth, props.data))
    }

    window.addEventListener("resize", process)
    return () => window.removeEventListener("resize", process)
  }, [category, props.data])

  return <div className={classes.center}>{category}</div>
}

export default Category
