import React, { useContext } from 'react'
import { itemContext } from '../App';

function MenuCard({ data }) {
    //console.log("menucard rendered");
    const iL = useContext(itemContext);
    const sendId = (id) => {
        iL.method({ type: 'set_id', payload: id });
    }

    const increment = () => {
        iL.method({ type: 'addItem', payload: data })
        iL.method({ type: 'getTotalItems' })
    };


    return (
        <>
            <div key={data.id} className="menuCard d-flex justify-content-between flex-wrap" onClick={() => sendId(data.id)}>
                <div className="d-flex flex-column itemDescription">
                    <div>
                        <div className="h5">{data.itemName}</div>
                        <div>{data.description ?? ''}</div>
                    </div>
                    <div className="py-2">S&#36; {`${data.price}.00`}</div>
                    <button type="button" className="btn btn-outline-warning mt-auto p-2 w-50 addCart" onClick={increment}>Add to cart</button>
                </div>
                <div className="menuCardImg position-relative">
                    <img alt="" className="img-fluid img-rounded" src={data.img ?? "./images/loading/loading.jpg"} />
                    {data.tag !== "" ? <span className="position-absolute top-0 end-0 bg-primary badge" style={{ padding: "5px" }}>{data.tag}</span> : ''}
                </div>
            </div>

        </>
    )
}

export default React.memo(MenuCard);
