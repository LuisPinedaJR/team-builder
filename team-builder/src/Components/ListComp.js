import React from 'react'

const ListComp = props => {
  return (
    <div className="list">
      {props.list.map(person => (
        <div key={person.id} className="list-order">
          <ul>
            <li>Team Member Name: {person.name}</li>
            <p>Crew Postion: {person.position}</p>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ListComp
