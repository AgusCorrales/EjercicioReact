import React from 'react'

const Person = (props) => {
console.log(props);
  return (
    <div className="text-person">Hola soy {props.name} {props.surname} y tengo {props.age} años</div>
  )
}

export default Person