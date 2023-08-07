import React from 'react'
import Link from 'next/link'
import {BsPlayFill, BsFillSkipBackwardFill, BsFillSkipForwardFill, BsShuffle, BsFillPauseFill} from 'react-icons/bs'
import '../projects/projects.css'

const pages = () => {
  return (
    <div className='ipod--page'>
      <Link href='/'>Home</Link>
      <div className='ipod'> 
        <div className='ipod--screen'>
          <p>this is the screen</p>
        </div>
        <div className='ipod--selector'>
          <div className='ipod--selector--top'>
            <p>MENU</p>
          </div>
          <div className='ipod--selector--middle'>
            <BsFillSkipBackwardFill/>
            <div className='ipod--selector--circle'></div>
            <BsFillSkipForwardFill/>
          </div>
          <div className='ipod--selector--bottom'>
            <BsPlayFill/>
            <BsFillPauseFill/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pages