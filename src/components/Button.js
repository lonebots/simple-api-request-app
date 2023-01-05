import React from 'react'
import { getSingleUser } from '../redux/User/user.actions'

function Button({ id, dispatch }) {
  // call action to set curent user
  const handleClick = (id) => {
    getSingleUser(id)
  }
  return (
    <button className='button' onClick={() => handleClick(id)}>
      {id}
    </button>
  )
}

export default Button