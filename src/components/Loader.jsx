import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const LoadingSpinner = ({ size = 'medium' }) => {
  
  const {theme} = useContext(ThemeContext)
  return (
    <div
      className={`inline-block animate-spin rounded-full align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] w-12 h-12 border-4 ${theme==='light'?'border-solid border-black border-r-transparent':'border-solid border-white border-r-transparent'} `}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  )
}

export default LoadingSpinner