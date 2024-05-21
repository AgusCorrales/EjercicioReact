import React from 'react'


const Home = (props) => {
    console.log(props)

  return (
    <div className='text-home'>Name: {props.dishe.name} <br/> Description: {props.dishe.description} <br/> Price: {props.dishe.price}</div>
  )
}

export default Home