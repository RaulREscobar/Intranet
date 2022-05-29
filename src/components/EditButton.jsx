import React from 'react'
import { Link } from 'react-router-dom'

export const EditButton = ({url}) => {
    return (
    <Link to={url} className='icon'>
            <i class="bi bi-pencil edit"></i>       
    </Link>
  )
}
