import React from 'react'
import { Card, CardText, CardTitle, CardSubtitle, CardBody, Col, CardImg } from 'reactstrap'
import FormLogin from './FormLogin'

function CardConteiner() {
    return (
        <div>          
                <Col sm="4">
                    <Card color='light' >
                        <CardBody>
                            <CardTitle tag="h5">
                                <div className='logo'>
                                <CardImg
                               src="https://nets.com.ar/wp-content/uploads/2022/02/cropped-Logo-empresa-comunicacion-simple-morado-1.png"
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

export default CardConteiner