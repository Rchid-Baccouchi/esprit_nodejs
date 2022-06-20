import React from 'react'
import { Link } from 'react-router-dom'

function DetailsRow({ Title, Author, Type, Price, Id, onDelete }) {
  return (
    <tr>
      <th>{Title}</th>
      <td>{Author}</td>
      <td>{Type}</td>
      <td>{Price}</td>
      <td className="gap__actions">
        <span className="badge bg-info">
          <Link to={`/${Id}`} className="text-white" > Edit </Link>
          <i className="fas fa-edit"></i>
        </span>
        <span className="badge bg-danger" onClick={() => onDelete(Id)}>
          <i className="fas fa-trash-alt">
          </i>
            </span>
      </td>
    </tr>
  )
}

export default DetailsRow