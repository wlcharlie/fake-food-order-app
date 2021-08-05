import classes from "./Service.module.css"

const Service = () => {
  return (
    <div className={classes.service}>
      <div>
        <i className="fab fa-facebook-square" />
        <i className="fab fa-twitter" />
        <i className="fab fa-instagram" />
      </div>
      <div className={classes.rightSection}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/chiou-charlie/">
              此網站的作者
            </a>
          </li>
          <li>
            <a href="https://wlcharlie.github.io/">MY BLOG</a>
          </li>
          <li>
            <a href="#">Author: Charlie | 2021</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Service
