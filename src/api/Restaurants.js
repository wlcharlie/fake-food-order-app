import axios from "axios"

const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
  params: {
    latitude: "12.91285",
    longitude: "100.87808",
    limit: "30",
    currency: "USD",
    distance: "2",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
}

export const fetchRestaurants = async () => {
  try {
    const response = await axios.request(options)
    return response
  } catch (err) {
    throw new Error(err)
  }
}
