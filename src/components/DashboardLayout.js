import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom';
// import Footer from './Footer'
// import Home from './Home'
// import Menu from './Menu'
// import CheckOut from './CheckOut';
// import Payment from './Payment';


const Footer = lazy(() => import('./Footer'))
const Home = lazy(() => import('./Home'))
const Menu = lazy(() => import('./Menu'))
const CheckOut = lazy(() => import('./CheckOut'))
const Payment = lazy(() => import('./Payment'))



function DashboardLayout(props) {
  //console.log("dashLayout rendered");
  const matchPath = props.match.path;
  return (
    <div className="dashboardLayout">
      <Switch>
        <Route
          exact path={`${matchPath}`}
          render={(props) => (matchPath === "/" ?
            (<Home {...props} />) :
            (matchPath === "/menu" ?
              (<Menu {...props} />) :
              (matchPath === "/payment" ?
                (<Payment {...props} />) :
                (<CheckOut {...props} />)
              )))} />
      </Switch>
      <Footer />
    </div>

  )
}

export default React.memo(DashboardLayout)
