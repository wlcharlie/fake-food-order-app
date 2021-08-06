import React, { useState } from "react"
import FilterTitle from "./FilterTitle"
import classes from "./FilterForm.module.css"
import Button from "../UI/Button"

import { useMediaQuery } from "react-responsive"

const FilterForm = props => {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" })
  const [isChecked, setIsChecked] = useState({ check: "default" })
  const categoryFilterCheck = event => {
    setIsChecked({ check: event.target.value })
  }

  return (
    <React.Fragment>
      {props.types === "dietLimit" && (
        <div>
          <FilterTitle subTitle="飲食限制" />
          <div className={classes[props.types]}>
            <Button
              styles="filterButton"
              text="吃土料理"
              icon="fas fa-seedling"
              context="dirt"
            />
            <Button
              styles="filterButton"
              text="地雷料理"
              icon="fas fa-bomb"
              context="bomb"
            />
            <Button
              styles="filterButton"
              text="變胖料理"
              icon="fas fa-piggy-bank"
              context="pig"
            />
          </div>
        </div>
      )}
      {props.types === "priceRange" && (
        <div>
          <FilterTitle subTitle="價格範圍" />
          <div className={classes[props.types]}>
            <Button styles="filterButton" text="$" context="I" />
            <Button styles="filterButton" text="$$" context="II" />
            <Button styles="filterButton" text="$$$" context="III" />
            <Button styles="filterButton" text="$$$$" context="IV" />
          </div>
        </div>
      )}
      {props.types === "radio" && (
        <div>
          <FilterTitle subTitle="分類" />
          <div className={classes[props.types]}>
            <div>
              <input
                checked={isChecked.check === "default"}
                type="radio"
                name="category"
                value="default"
                id="default"
                onChange={categoryFilterCheck}
              />
              <label htmlFor="default">您專屬的推薦餐點(預設)</label>
            </div>
            <div>
              <input
                checked={isChecked.check === "hot"}
                type="radio"
                name="category"
                value="hot"
                id="hot"
                onChange={categoryFilterCheck}
              />
              <label htmlFor="hot">熱門餐點</label>
            </div>
            <div>
              <input
                checked={isChecked.check === "rate"}
                type="radio"
                name="category"
                value="rate"
                id="rate"
                onChange={categoryFilterCheck}
              />
              <label htmlFor="rate">評分</label>
            </div>
            <div>
              <input
                checked={isChecked.check === "delivery"}
                type="radio"
                name="category"
                value="delivery"
                id="delivery"
                onChange={categoryFilterCheck}
              />
              <label htmlFor="delivery">配送時間</label>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default FilterForm
