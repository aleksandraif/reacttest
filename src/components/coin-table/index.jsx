import React from 'react'

export default function CoinTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>age</th>
                    <th>phone</th>
                    <th>address</th>
                    <th>mail</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.rank}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.phone}</td>
                            <td>{row.address}</td>
                            <td>{row.mail}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}