import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import UserCard from '../components/UserCard'

function HomePage() {
    const count = useSelector(state => state.users.count)
    var buttonCountList = Array.from(Array(count).keys(), n => n + 1);
    const user = useSelector(state => state.users.user)
    const loading = useSelector(state => state.users.loading)

    return (
        <div className='homepage'>
            <div className='card-container'>
                <h3>Click any button to Load User data</h3>
                {
                    Object.keys(user).length !== 0 &&
                    <UserCard user={user} />
                }
            </div>

            <div className='button-container'>
                {
                    count > 0 &&
                    buttonCountList.map((id, idx) => {
                        return (
                            <Button id={id} key={idx} loading={loading} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePage