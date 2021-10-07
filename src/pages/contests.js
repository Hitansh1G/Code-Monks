import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import ContestCard from '../components/ContestCard';


const contestsPage = () => {
    const active = {
        style: {
            backgroundColor: 'rgba(255, 187, 0, 0.801)',
            color: 'black !important'
        }
    }
    return (
        <div>
            <Navbar contest={active.style} />
            <div className="container-lg d-flex justify-content-around align-self-stretch flex-wrap cards" style={{ marginTop: '60px' }}>
                <ContestCard />
            </div>
        </div>
    )
}

export default contestsPage
