import React from 'react'

type inputProps = {value:string, handleChange:()=>void}

export default function InputE({value, handleChange}: inputProps) {
  return (
    <input type="text" value={value} onChange={handleChange}/>
  )
}
