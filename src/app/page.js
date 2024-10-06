"use client"
import React from 'react'

function page() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-black'>
      <button
        className=' text-white text-3xl border-2 border-white px-5 py-5 rounded-full'
        onClick={() => window.location.href = "http://localhost:3000/auth/google"}>sign in with google</button>
    </div>
  )
}

export default page