import React from 'react'

export default function PhoneTable(props) {
  return (
    <div>
      <h1 className="text-center">Телефонная книга</h1>

      <table className="table table-bordered table-hover">   
        <thead>
          <tr className="text-center">
            <th>Номер</th>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Телефон</th>
            <th>Адрес</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map(row => (
              <tr key={row.id} className="thead-default">
                <td>{row.id}</td>
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
    </div>
  )
}