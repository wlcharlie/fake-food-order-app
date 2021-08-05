import Img from "../UI/Img"
import classes from "./Info.module.css"

const Info = () => {
  return (
    <div className={classes.info}>
      <div className={classes.images}>
        <Img
          center="top"
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c266ad32e5e88af804b3a1b6b60098f9.svg"
          alt="logo"
        />
        <div>
          <Img
            center="center"
            size="sized"
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg"
            alt="logo"
          />
          <Img
            center="center"
            size="sized"
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/db762f134616c045397263c01ed87291.png"
            alt="logo"
          />
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">取的協助</a>
          </li>
          <li>
            <a href="#">新增您的餐廳</a>
          </li>
          <li>
            <a href="#">註冊成為合作外送夥伴</a>
          </li>
          <li>
            <a href="#">建立企業帳戶</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">我附近的美食外送</a>
          </li>
          <li>
            <a href="#">檢視所有城市</a>
          </li>
          <li>
            <a href="#">查看所有國家/地區</a>
          </li>
          <li>
            <a href="#">閱讀我們的部落格</a>
          </li>
          <li>
            <a href="#">關於Fake Uber Eats</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Info
