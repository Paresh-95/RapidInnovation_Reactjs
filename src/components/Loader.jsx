import React from 'react'

const LoadingSpinner = ({ size = 'medium' }) => {
  

  return (
    <div
      className={`inline-block animate-spin rounded-full border-solid border-gray-800 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] w-12 h-12 border-4`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  )
}

export default LoadingSpinner