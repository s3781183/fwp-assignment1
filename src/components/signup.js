import React from 'react'

function SignUp() {
  return (
    <div classname ="form-content-right">
      <form classname ="form">
        <h1> Sign up</h1>
        <div classname ="form-inputs">
          <label htmlFor="username"
          className='form-label'>
            <input 
            type="text" 
            name="username" 
            classname="form-input"
            placeholder="Enter your username">
            </input>
          </label>
        </div>
      </form>

    </div>
  )
}

export default SignUp;