import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className='user-card'>
      <div className='user-details'>
        <div className='user-info'>
          <p className='userdetail_text'> First Name: <b> {user.first_name} </b></p>
          <p className='userdetail_text'> Last Name: <b> {user.last_name} </b></p>
          <p className='userdetail_text'> Email Address: <b> {user.email}</b> </p>
          <p className='userdetail_text'> User ID: <b> {user.id}</b> </p>

        </div>
        <div className='user-avatar'>
          <img className='avatar' src={user.avatar} alt='user-avatar' />
        </div>
      </div>
    </div>
  )
}

export default UserCard