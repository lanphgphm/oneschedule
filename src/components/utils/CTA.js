import React from 'react'
import './index.css'

const CTA = ({link, text}) => {
  return (
    <a href={link} className='text-decoration-none'>
      <div className='cta my-2'>
        <div className='text-white o-heading'>{text}</div>
      </div>
    </a>
  )
}

export default CTA
