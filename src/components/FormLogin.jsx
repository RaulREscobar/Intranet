import React from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Link } from "react-router-dom"

function FormLogin() {
    return (
        <div>
            <Form inline >
                <FormGroup>
                    <Label
                        for="exampleEmail"
                        hidden
                    >
                        Usuario/Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                        for="examplePassword"
                        hidden
                    >
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                </FormGroup>
                <Button 
                    color="dark"
                    outline
                    className='d-flex mx-auto'
                    >
                   <Link to="/home">Ingresar</Link> 
                </Button>
            </Form>
        </div>
    )
}

export default FormLogin