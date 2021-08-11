import classes from "./Login.module.css"

const Login = () => {
  return (
    <div className={classes.loginForm}>
      <form>
        <div className={classes.inputForm}>
          <label>Account</label>
          <input />
        </div>
        <div className={classes.inputForm}>
          <label>Password</label>
          <input />
        </div>
        <div>
          <button className={classes.loginButton}>LOGIN</button>
        </div>
      </form>
    </div>
  )
}

export default Login
