import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard';
import itemMenu from './Database';

//import {itemContext} from '../App';
var store = require('store');

function RestaurantMenu() {
  const [items, setitems] = useState(store.get('items') ?? []);
  const [loading, setLoading] = useState(store.get('loading') ?? true);
  const [error, setError] = useState(store.get('error') ?? '');

  useEffect(() => {
    //console.log("Restaurant menu rendered");

    store.set('error', '');
    store.set('loading', false);
    store.set('items', itemMenu);
    setLoading(false);
    setError('');
    setitems(itemMenu);

  }, [items])


  return (
    error !== "" ? <h2 className="text-center text-danger border border-dark p-2 position-absolute top-50 start-50 translate-middle">{`${error}. Please try after sometime`}</h2> : loading === false ?
      (<div className="container-fluid menuLayout">
        {items && items.map((item) =>
        (<div key={item.id} className="container d-flex flex-column">
          <div className="h3" id={item.category}><span className='tt'>{item.category}</span></div>
          <div className="menuCardWrapper d-flex flex-wrap">
            {item.items && item.items.map(i =>
              <MenuCard data={i} key={i.id} />
            )}
          </div>
        </div>)
        )}
      </div>) :
      (
        <div className="spinnerBlock d-flex justify-content-center">
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )

  )
}

export default React.memo(RestaurantMenu)
