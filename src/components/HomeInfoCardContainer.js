import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import { Link } from 'react-router-dom';
import img from '../images/menu.png'

function HomeInfoCardContainer() {
    //console.log("homeinfocardcontner rendered");
    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey">
            <Link to="/menu"><HomeInfoCard infoImg={img} infoTitle="RESTAURANT" infoLink="Check the Menu" /></Link>
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
