import React from 'react'
import { Table } from 'reactstrap'
import TitleSection from './TitleSection'

const Birthday = () => {
    return (
        <div className='p-3 bg-central mb-5'>
            < TitleSection title="Nuestros cumpleañeros del mes" />
            <Table
                bordered
                dark
                hover
                responsive
                size=""
                striped
                className='mb-0'
            >
                <thead>
                    <tr>
                        <th>
                            Día
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Apellido
                        </th>
                        <th>
                            Cuantos cumple
                        </th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr>
                        <th scope="row">
                            8
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            39
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            15
                        </th>
                        <td>
                            Jacob
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                            26
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            22
                        </th>
                        <td>
                            Larry
                        </td>
                        <td>
                            Bird
                        </td>
                        <td>
                            35
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Birthday