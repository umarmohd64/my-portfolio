import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <div>
        <ScrollToTop smooth width='22' height='22' top={1200} className='flex justify-center items-center'
        />
    </div>
  )
}

export default ScrollTop