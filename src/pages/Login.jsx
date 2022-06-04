import React from 'react'
import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  Col,
  CardImg,
} from 'reactstrap'
import FormLogin from '../components/FormLogin'

function Login() {
  return (
    <div className='container login'>
      <Col sm="4">
        <Card color='light' >
          <CardBody>
            <CardTitle tag="h5">
              <div className='logo'>
                <CardImg
                  src="http://nets.com.ar/wp-content/uploads/2022/02/cropped-Logo-empresa-comunicacion-simple-morado-1.png"
                />
              </div>
            </CardTitle>
            <CardText>
              <FormLogin />
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  )
}

export default Login