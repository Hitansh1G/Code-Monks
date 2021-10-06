import React from 'react'
import Navbar from '../components/Navbar'

const eventsPage = () => {
    const active = {
        style: {
            backgroundColor: 'rgba(253, 200, 48, 0.7)',
            color: 'black'
        }
    }
    return (
        <div>
            <Navbar event={active.style} />
        </div>
    )
}

export default eventsPage
