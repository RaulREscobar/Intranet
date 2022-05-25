import React from 'react'
import { EditButton } from './EditButton'

const User = () => {
  return (
    <div>
        <section className='d-flex justify-content-center'>
           <span className='position-relative avatar'>
           <EditButton url="/editProfile" />
               RR
           </span>        
        </section>
    </div>
  )
}

export default User