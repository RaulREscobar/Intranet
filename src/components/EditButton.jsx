import React from 'react'
import { Link } from 'react-router-dom'

export const EditButton = () => {
  return (
    <Link to={"/editProfile"} className='icon'>
            <i class="bi bi-pencil edit"></i>       
    </Link>
  )
}
