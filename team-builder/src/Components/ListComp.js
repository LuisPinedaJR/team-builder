import React from 'react'

const ListComp = props => {
  return (
    <div>
      {props.list.map(person => (
        <div key={person.id}>
          <ul>
            <li>{person.name}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ListComp
