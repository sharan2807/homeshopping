import { HashRouter, Routes, Route, Link } from "react-router-dom";

const SellerApp = () => {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-3">
        <div className="container">
          <a className="navbar-brand">
            <i className="fa fa-shopping-bag fa-lg text-warning"></i> @HomeShop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/">
                  {" "}
                  <i className="fa fa-cogs"></i> Dashboard
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link active" to="/newitem">
                  {" "}
                  <i className="fa fa-plus"></i> New Item
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link active" to="/itemlist">
                  {" "}
                  <i className="fa fa-table"></i> Item List
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link active" to="/orderlist">
                  {" "}
                  <i className="fa fa-headset"></i> Order List
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link active"> Welcome -Seller 1
                  {" "}
                  <i className="fa fa-power-off text-warning"></i> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </HashRouter>
  );
};
export default SellerApp;
