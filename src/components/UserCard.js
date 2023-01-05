import React from 'react'
import { useSelector } from 'react-redux'

const UserCard = ({ user }) => {
  const loading = useSelector(state => state.users.loading)
  return (<>
    {console.log("loading : ", loading)}
    {
      loading ?
        (<div className='user-card'>loading...</div>) :
        (
          <div className='user-card' >
            <div className='user-details'>
              <div className='user-info'>
                {user.first_name}
                <p className='userdetail_text'> First Name: <b> {user.first_name} </b></p>
                <p className='userdetail_text'> Last Name: <b> {user.last_name} </b></p>
                <p className='userdetail_text'> Email Address: <b> {user.email}</b> </p>
                <p className='userdetail_text'> User ID: <b> {user.id}</b> </p>
              </div>
              <div className='user-avatar'>
                <img className='avatar' src={user.avatar} alt='user-avatar' />
              </div>
            </div>
          </div >)
    }
  </>

  )
}

export default UserCard