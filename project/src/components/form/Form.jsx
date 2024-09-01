import React from 'react'

const Form = (props) => {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} id={props.id} className='border-2 rounded-lg p-2' />
    </div>
  )
}

export default Form
