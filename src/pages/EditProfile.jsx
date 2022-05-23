import React from 'react'
import BarNav from '../components/BarNav'
import User from '../components/User'
import TitleSection from '../components/TitleSection'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const EditProfile = () => {
  return (
    <div className=''>
      < TitleSection title="Hola Raul" />
      < User />
      <section className='bg-central pt-3' >
        <Form inline >
          <FormGroup>
            <Label
              for="name"
              hidden
            >
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Nombre"
              type="text"
            />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label
              for="lastName"
              hidden
            >
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Apellido"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label
              for="date"
              hidden
            >
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
            />
          </FormGroup>
          <Button
            color="light"
            outline
            className='d-flex mx-auto'
          >
            <Link to="/editProfile">guardar</Link>
          </Button>
        </Form>
      </section>

      <BarNav />
    </div>
  )
}

export default EditProfile