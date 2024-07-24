import React, { useEffect, useState } from 'react'

const GretingFun = (props) => {
  const [nameFunc, setName] = useState (props.name)
  useEffect(() => {
    setTimeout(() => {
      setName('Hola Alfonsina')
    }, 3000)
  }, [])
 
  return (
    <div>
      <p>MensajeFunc: {nameFunc}</p>
      </div>
  )
}

export default GretingFun
 //por terminar