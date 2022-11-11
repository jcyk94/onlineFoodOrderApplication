import React from 'react'
import '../css/home-cards.css'
import img from '../images/background.png'

function CardContainer() {
    // console.log("CardContainer rendered");
    return (
        <div className="full-container-fluid">
            <img className="img-fluid" id="home-img" src={img} alt="home-banner" />
        </div>
    )
}

export default React.memo(CardContainer)
