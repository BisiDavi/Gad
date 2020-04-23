import React from 'react'

const register = () => {
  return (
    <div className="register">
      <h3>Register</h3>
      <form method="POST">
        <label htmlFor="name">Name</label>
        <input type="name" placeholder="Enter Name" />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='create password' required/>
        <label htmlFor="confirm_password">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" required />
        <input type="submit" name="Regiser" />
      </form>
    </div>
  )
}

export default register;
