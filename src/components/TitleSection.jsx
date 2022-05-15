import React from 'react'

const TitleSection = (props) => {
  return (
    <div>
        <h3 className='text-center bg-central text-light p-3 mb-0'>{props.title}</h3>
    </div>
  )
}

export default TitleSection