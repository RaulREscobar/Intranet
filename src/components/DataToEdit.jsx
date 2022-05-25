import React, { useState } from 'react'
import {EditButton }from './EditButton'

const DataToEdit = (props) => {
    const [data, setData] = useState(props.data)
  return (
    <div className='d-flex justify-content-between date'>
        <span className='' >
            {data}            
        </span>
        <span className='position-relative'>
            < EditButton />
        </span>
    </div>
  )
}

export default DataToEdit