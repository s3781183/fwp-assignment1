import React from 'react'

function signup() {
  return (
    <div>
        <div className="username">
            <label  for="firstName">First Name </label>
            <input type="text" id="firstName" placeholder="First Name"/>
        </div>
        <div >
            <label  for="lastName">Last Name </label>
            <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
        </div>
        <div >
            <label  for="email">Email </label>
            <input  type="email" id="email" className="form__input" placeholder="Email"/>
        </div>
        <div >
            <label  for="password">Password </label>
            <input  type="password"  id="password" placeholder="Password"/>
        </div>
        <div >
            <label for="confirmPassword">Confirm Password </label>
            <input type="password" id="confirmPassword" placeholder="Confirm Password"/>
        </div>
    <div class="footer">
        <button type="submit" class="btn">Register</button>
    </div>
</div>      
  )
}

export default signup