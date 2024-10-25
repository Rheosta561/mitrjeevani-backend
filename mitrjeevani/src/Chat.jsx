import React from 'react'
import Chatbot from './Chatbot'
import Aayushi from './aayushi.png'
import Footer from './Footer'

function Chat() {
  return (
    <div>
      <Chatbot></Chatbot>
      <div className='border h-52 border-zinc-950 flex bg-emerald-200'>
        <div className='border border-zinc-400 shadow-md h-full w-52 rounded-full bg-emerald-50'>
          <img src={Aayushi} alt="" />
        </div>
        <div className=' w-96 sm:w-56 md:w-96 flex flex-col'>
          <div className=' w-full h-1/2 mt-26 '></div>
          <div className=' w-full h-1/2 mt-26 border-zinc-950 text-sm  ml-4 mt-28 text-zinc-700'>New to the chat , Lets get started with the session ..</div>
        </div>

      </div>
      <Footer/>

    </div>
  )
}

export default Chat