import React from 'react'
import DeliveryInfo from './DeliveryInfo'
import img from '../images/food.png'

function CheckOut() {
    //console.log("checkout rendered");
    return (
        <div className="checkOutOrder">
            <div className="d-flex align-items-center">
                <img className="checkOutOrderImg img-responsive" src={img} alt="" />
                <DeliveryInfo />
            </div>
        </div>
    )
}

export default React.memo(CheckOut)
