import React from 'react'

export const InformationCard = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>Edad: {props.age}</p>
        <ul>
            {
                props.hobbies.map((hobbie, index) => (
                    <li key={index}>{hobbie}</li>
                ))
            }
        </ul>
    </div>
  )
}
