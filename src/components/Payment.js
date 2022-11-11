import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { paymentList } from './Database';

var store = require('store');


function Payment() {

    // eslint-disable-next-line
    const [paymentItem, setPaymentItem] = useState(paymentList ?? []);

    const history = useHistory();
    const checkRadioBtn = (e) => {

        let targetId = e.target.id;
        let eWalletId = document.getElementById('EWallets').id;
        let eWalletContent = document.getElementById('showEWalletPay').classList;

        let cashId = document.getElementById('Cash').id;
        let cashContent = document.getElementById('showCashPay').classList;

        if (targetId === eWalletId) {
            eWalletContent.add('show')
            cashContent.remove('show')
            // cashContent.add('collapse')
        }

        if (targetId === cashId) {
            cashContent.add('show')
            eWalletContent.remove('show')
        }

    }

    const comfirmedOrder = (paymentMethod) => {
        store.set("paymentMethod", paymentMethod);
        store.remove('orderTime');
        store.set("orderTime", new Date().toLocaleString());
        return history.push('/checkout');
    }


    return (
        <div className='container paymentContainer'>
            <div className="paymentForm">
                <h4 className='col align-self-center'> Payment Type</h4>
            </div>
            <div className='paymentFormBody'>
                <div className="card card-body">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" onClick={checkRadioBtn} name="paymentType" id="Cash" />
                        <label className="form-check-label" htmlFor="Cash">
                            Cash On Delivery
                        </label>
                        <div className="collapse " id="showCashPay">
                            {paymentItem && paymentItem.map((item) =>
                                item.id === 101020 ?
                                    (<div key={item.id} className="">
                                        <div className="menuCardWrapper d-flex flex-wrap">
                                            {item.items && item.items.map(i =>
                                                <div key={i.id} className="menuCard d-flex justify-content-between flex-wrap" onClick={() => comfirmedOrder(i.name)}>
                                                    <div className="">
                                                        <img alt="" className="img-fluid img-rounded" src={i.img ?? "./images/loading/loading.jpg"} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>)
                                    : "")}
                        </div>
                    </div>
                </div>
                <div className="card card-body">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" onClick={checkRadioBtn} name="paymentType" id="EWallets" />
                        <label className="form-check-label" htmlFor="EWallets">
                            E-Wallet
                        </label>
                        <div className="collapse" id="showEWalletPay">
                            {paymentItem && paymentItem.map((item) =>
                                item.id === 101010 ?
                                    (<div key={item.id} className="">
                                        <div className="menuCardWrapper d-flex flex-wrap">
                                            {item.items && item.items.map(i =>
                                                <div key={i.id} className="menuCard d-flex justify-content-between flex-wrap" onClick={() => comfirmedOrder(i.name)}>
                                                    <div className=" ">
                                                        <img alt="" className="img-fluid img-rounded" src={i.img ?? "./images/loading/loading.jpg"} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>)
                                    : "")}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to="/menu" className="btn btn-outline-dark">
                    Back to Menu
                </Link>
            </div>

        </div>
    )
}

export default React.memo(Payment)


// <div className="d-inline-flex">
// <button type="button" className="btn btn-outline-success" onClick={comfirmedOrder} >Payment</button>
// </div>