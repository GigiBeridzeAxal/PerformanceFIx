"use client"
import React, { useEffect, useState } from 'react'
import LoadingImage from './components/LoadingImage'

const Loading = ({ done }) => {
  const [shouldHide, setShouldHide] = useState(false);
  
  useEffect(() => {
    if (done) {
       const timer = setTimeout(() => setShouldHide(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShouldHide(false);
    }
  }, [done]);

  return (
    <div className={`fixed top-0 w-full bg-white z-[10000] duration-300 flex items-center justify-center h-screen
      ${done ? 'opacity-100' : 'opacity-100'} 
      ${shouldHide ? 'hidden' : ''}`}
    >
      <LoadingImage />
    </div>
  )
}

export default Loading