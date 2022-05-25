import React from 'react'
import BarNav from '../components/BarNav'
import User from '../components/User'
import TitleSection from '../components/TitleSection'
import DataToEdit from '../components/DataToEdit'

const EditProfile = () => {
  return (
    <div className=''>
      < TitleSection title="Hola Raul" />      
      < User />
      <section className='bg-central pt-3' >
        < DataToEdit data="Raul" />
        < DataToEdit data="Escobar" />
        < DataToEdit data="21 de diciembre" />
      </section>
      <BarNav />
    </div>
  )
}

export default EditProfile