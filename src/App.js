import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import { Suspense } from 'react/cjs/react.production.min';
var store = require('store');

export const itemContext = React.createContext();
var initialState = {
  id: 0,
  list: store.get('orderedItems') ?? [],
  totalItems: store.get("totalitems") ?? 0,
  totalCost: store.get("totalCost") ?? 0
}
const myReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'set_id':
      return { ...state, id: action.payload }
    case 'addItem':
      let { list } = state;
      let { payload } = action;

      if (list === undefined || list.length === 0) {
        let newList = { ...state, list: [{ ...payload, quantity: 1 }] };
        store.set("orderedItems", newList["list"]);
        return newList;
      }
      else if (list.filter(item => item.id === payload.id).length === 0) {
        let newList = { ...state, list: [...list, { ...payload, quantity: 1 }] };
        store.set("orderedItems", newList["list"]);
        return newList;
      }
      else {
        let newList = { ...state, list: list.map(item => item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item) };
        store.set("orderedItems", newList["list"]);
        return newList;
      }
    case 'deleteItem':
      let pll = action.payload;
      //console.log("in delete");           
      const t = state.list.map((item) =>
        (item.id === pll.id) ?
          { ...item, quantity: item.quantity - 1 } : item);
      let newList = { ...state, list: t.filter(a => a.quantity !== 0) };
      store.set("orderedItems", newList["list"]);
      if (store.get("orderedItems").length === 0) {
        store.set("totalitems", 0);
        store.set("totalCost", 0);
      }
      return newList;

    case 'getTotalItems':
      if (state.list.length > 0) {
        let totalitems = { ...state, totalItems: state.list.map(a => a.quantity).reduce((a, b) => a + b) };
        store.set("totalitems", totalitems["totalItems"]);
        return totalitems;
      }
      else return { ...state, totalItems: 0 }

    case 'clearCart':
      store.remove("orderedItems");
      store.remove("totalitems");
      return { ...state, list: [] }

    case 'totalCost':
      if (state.list.length > 0) {
        store.set('totalCost', state.list.map(l => (l.quantity * l.price)).reduce((a, b) => a + b));
        return { ...state, totalCost: state.list.map(l => (l.quantity * l.price)).reduce((a, b) => a + b) }
      }
      break;

    case 'logOut':

      store.clearAll();
      return { ...initialState, list: [], totalItems: 0, totalCost: 0 }

    //return {...state,}

    default:
      return state;
  }
}

function App() {
  const [myState, dispatch] = useReducer(myReducer, initialState);
  return (
    <div className="App">
      <itemContext.Provider value={{ state: myState, method: dispatch }}>
        <Router>
          <Switch>
            <Suspense fallback={
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
            }>
              <Route exact path='/' render={props => <DashboardLayout {...props} />} />
              <Route path='/menu' render={props => <DashboardLayout data={myState} {...props} />} />
              <Route path='/checkout' render={props => <DashboardLayout {...props} />} />
              <Route path='/payment' render={props => <DashboardLayout {...props} />} />
            </Suspense>
          </Switch>
        </Router>
      </itemContext.Provider>
    </div>
  );
}

export default App;


// <Route exact path='/' render={props => <DashboardLayout {...props} />} />
// <Route path='/menu' render={props => <DashboardLayout data={myState} {...props} />} />
// <Route path='/checkout' render={props => <DashboardLayout {...props} />} />
// <Route path='/payment' render={props => <DashboardLayout {...props} />} />