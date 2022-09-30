import React from 'react'

type greetPops = {
    name: string
}
export default function Greet(props: greetPops) {
  return (
    <div>Welcome {props.name} To a new journey</div>
  )
}
