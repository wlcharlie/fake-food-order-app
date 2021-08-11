import Header from "./components/Layout/Header"
import Category from "./components/Layout/Category"
import Promo from "./components/Layout/Promo"
import MainTwoSection from "./components/Layout/MainTwoSection"
import Filter from "./components/Filter/Filter"
import Footer from "./components/Layout/Footer"
import React from "react"
import RestaurantCard from "./components/Restaurant/RestaurantCard"
import Restaurant from "./components/Restaurant/Restaurant"
import Login from "./components/admin/Login"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom"

const category = [
  "deals",
  "grocery",
  "top_eats",
  "bubble_tea",
  "taiwanese",
  "japanese",
  "dessert",
  "chinese",
  "korean",
  "healthy",
  "american",
  "pizza",
  "thai",
  "fast_food",
  "asian",
  "burger",
  "BBQ",
]

const promos = [
  {
    title: "輸入「五倍運費」",
    subTitle: "犒勞辛苦的外送員，平台也能多賺一點",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/34abab03-9f80-4c36-bcf3-5a34ec462b16.jpg",
  },
  {
    title: "",
    subTitle: "",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/6fc10d80-cc50-4466-bbd4-d989e7a6ac94.jpg",
  },
  {
    title: "免出門",
    subTitle: "我們知道你想變成馬鈴薯",
    image:
      "https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "下午茶優惠",
    subTitle: "沒正常吃三餐，但下午茶一定要有",
    image:
      "https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "輸入「我自己來」",
    subTitle: "自己的餐點自己做，但錢還是照收",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/593ffeb9-869c-4ce2-a44b-1b4022222597.jpg",
  },
  {
    title: "輸入「五倍運費」",
    subTitle: "犒勞辛苦的外送員，平台也能多賺一點",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/34abab03-9f80-4c36-bcf3-5a34ec462b16.jpg",
  },
  {
    title: "",
    subTitle: "",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/6fc10d80-cc50-4466-bbd4-d989e7a6ac94.jpg",
  },
  {
    title: "免出門",
    subTitle: "我們知道你想變成馬鈴薯",
    image:
      "https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "輸入「我自己來」",
    subTitle: "自己的餐點自己做，但錢還是照收",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/593ffeb9-869c-4ce2-a44b-1b4022222597.jpg",
  },
  {
    title: "輸入「五倍運費」",
    subTitle: "犒勞辛苦的外送員，平台也能多賺一點",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/34abab03-9f80-4c36-bcf3-5a34ec462b16.jpg",
  },
  {
    title: "",
    subTitle: "",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/6fc10d80-cc50-4466-bbd4-d989e7a6ac94.jpg",
  },
  {
    title: "免出門",
    subTitle: "我們知道你想變成馬鈴薯",
    image:
      "https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "下午茶優惠",
    subTitle: "沒正常吃三餐，但下午茶一定要有",
    image:
      "https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "輸入「我自己來」",
    subTitle: "自己的餐點自己做，但錢還是照收",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/593ffeb9-869c-4ce2-a44b-1b4022222597.jpg",
  },
  {
    title: "輸入「五倍運費」",
    subTitle: "犒勞辛苦的外送員，平台也能多賺一點",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/34abab03-9f80-4c36-bcf3-5a34ec462b16.jpg",
  },
  {
    title: "",
    subTitle: "",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/6fc10d80-cc50-4466-bbd4-d989e7a6ac94.jpg",
  },
  {
    title: "免出門",
    subTitle: "我們知道你想變成馬鈴薯",
    image:
      "https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "輸入「我自己來」",
    subTitle: "自己的餐點自己做，但錢還是照收",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/593ffeb9-869c-4ce2-a44b-1b4022222597.jpg",
  },
  {
    title: "輸入「五倍運費」",
    subTitle: "犒勞辛苦的外送員，平台也能多賺一點",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/34abab03-9f80-4c36-bcf3-5a34ec462b16.jpg",
  },
  {
    title: "",
    subTitle: "",
    image:
      "https://d1g1f25tn8m2e6.cloudfront.net/6fc10d80-cc50-4466-bbd4-d989e7a6ac94.jpg",
  },
  {
    title: "免出門",
    subTitle: "我們知道你想變成馬鈴薯",
    image:
      "https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
]

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Category data={category} />
      <Promo data={promos} />
      <MainTwoSection>
        <Filter />
        <Restaurant>
          <RestaurantCard />
        </Restaurant>
      </MainTwoSection>
      <Footer />
    </React.Fragment>
  )
}

function App() {
  return (
    <BrowserRouter basename="/fake-food-order-app">
      <Switch>
        <Route path="/admin">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
