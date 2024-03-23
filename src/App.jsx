import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  console.log(props);

  return (
    <>
    
      <div className='first'>
        <p> Name: {props.name}</p> <br />
        <p> Desc: {props.desc}</p> <br />
        <p> Age:  {props.age}</p> <br />
      </div>

      {/* <div className='second'>
        <p> Name: {props.name} </p> <br />
        <p> Desc: {props.desc}</p> <br />
        <p> Age:  {props.age}</p> <br />
      </div>

      <div className='third'>
        <p> Name: {props.name}</p> <br />
        <p> Desc: {props.desc}</p> <br />
        <p> Age:  {props.age}</p> <br />
      </div> */}

    </>
  )
}

export default App
