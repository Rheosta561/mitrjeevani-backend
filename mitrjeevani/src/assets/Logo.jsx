import React from 'react'
import logo from '../logo.png'

function Logo() {
  return (
    <div className=' border-zinc-950 h-36 w-72 mx-auto overflow-hidden'>
        <img src={logo} alt="" className='-mt-12 w-full scale-50' />
    </div>
  )
}

export default Logo