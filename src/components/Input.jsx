import React from 'react'

const Input = ({
  type,
  value,
  placeholder
}) => {
  return <input type={type} name={value} placeholder={placeholder} />
}

export default Input
