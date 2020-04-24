import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <form action="#" method="POST">
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="Enter Email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter your password" />
        <input type="submit" name="Login" />
      </form>
      <p>No account? <span>Register</span></p>
    </div>
  )
}

export default Login;
