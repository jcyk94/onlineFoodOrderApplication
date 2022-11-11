import React from 'react'

function Footer() {
  //console.log("footer rendered");
  return (
    <>
      <div className="container-fluid footerNav bg-dark">
        <footer className="d-flex flex-wrap align-items-center py-2">
          <p className="col-md-4 mb-0 text-light flex-fill">&copy; 2022 Toshiba TEC</p>
          <div className="nav col-md-5 d-inline-flex flex-fill align-items-center justify-content-end link-light text-decoration-none">
          </div>
        </footer>
      </div>
    </>
  )
}

export default React.memo(Footer);
