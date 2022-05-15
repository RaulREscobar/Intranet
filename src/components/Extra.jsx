import React from 'react'
import { CardBody, Card, CardImg, CardText, CardTitle, CardSubtitle, CardGroup, Button } from 'reactstrap'
import TitleSection from './TitleSection'

const Extra = () => {
    return (
        <div>
            < TitleSection title="Novedades" />
            <CardGroup className='bg-central ' >
                <Card className='text-center bg-central text-light  mb-0'>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody >
                        <CardTitle tag="h5">
                            Medico a domicilio
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Nuevo servicio
                        </CardSubtitle>
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint!
                        </CardText>
                        <Button>
                            Leer mas
                        </Button>
                    </CardBody>
                </Card>
                <Card className='text-center  bg-central text-light  mb-0'>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Nuevo protocolo COVID-19
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Actualización
                        </CardSubtitle>
                        <CardText>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente!
                        </CardText>
                        <Button>
                            Leer mas
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Extra