import React from 'react'

export default function CoinTable(props) {
  return (
    <div>
      <h1>Телефонная книга</h1>

      <table className="table table-condensed table-hover table-bordered table-sm">   
        <thead>
          <tr className="thead-default">
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