import React from 'react'
import "./Menu.css"

const Menu = (props) => {
  return (
    <div className='text-menu'>Name: {props.dishe.name} <br/> Description: {props.dishe.description} <br/> Price: {props.dishe.price}</div>
  )
}

export default Menu