import React from 'react'

type personListProps = {
    names: {
        firstName: string,
        lastName: string,
        age: number
    }[]
}

type Person = {firstName: string, lastName: string, age: number}

export default function PersonList(props:personListProps): JSX.Element {
  return (
    <div>
        {
            props.names.map((person: Person)=> (<div key={person.age}>{person.firstName}</div>))
        }   
    </div>
  )
}
