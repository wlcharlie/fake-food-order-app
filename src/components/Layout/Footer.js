import classes from "./Footer.module.css"

import Info from "../Footer/Info"
import Service from "../Footer/Service"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Info />
      <Service />
    </div>
  )
}

export default Footer
