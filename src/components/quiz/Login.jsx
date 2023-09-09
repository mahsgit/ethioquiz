import React, { useEffect, useState } from 'react'

const Login = ({setUser}) => {

const [name,setName]=useState();

useEffect(() => {
  if (name) {
    setUser(name);
  }
}, [setUser]);

const handleClick = () => {
  if (name) {
    setUser(name);
  }
};

const handleInputChange = (event) => {
  setName(event.target.value);
};
    
  return (
    <div className="start">
      <h2 className='intro'>welcome to ethiopian quize are you ready</h2>
      <input
        className="startInput"
        placeholder="enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  )
}

export default Login
