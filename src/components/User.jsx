import React from 'react'
import { EditButton } from './EditButton'

const User = () => {
  return (
    <div>
        <section className='d-flex justify-content-center position-relative'>
            <span className='avatar'>RR</span>
            <EditButton />
        </section>
    </div>
  )
}

export default User