import React from 'react'

export default function ButtonPrimary({children}) {
  return (
    <button className='btn-primary br-bl-15 br-tr-15 hover-glass active-bg'>
            {children}
        </button>
  )
}
