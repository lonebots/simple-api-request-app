import React from 'react'
import UserCard from '../components/UserCard'

function HomePage() {
    const user = {

    }


    return (
        <div className='homepage'>
            <div className='card-container'>
                <div className='' placeholder='homepage prompt'>
                    
                    {/* <UserCard user={user} /> */}
                </div>
            </div>
            <div className='button-container'>
                <button className='button'>
                    1
                </button>
                <button className='button'>
                    2
                </button>
                <button className='button'>
                    3
                </button>
            </div>
        </div>
    )
}

export default HomePage