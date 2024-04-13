import { HashRouter, Routes, Route, Link } from "react-router-dom";

const UserApp = () => {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <div className="container">
          <a className="navbar-brand">
            <i className="fa fa-shopping-bag fa-lg text-warning"></i>  @HomeShop
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
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  {" "}
                  <i className="fa fa-home"></i> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/cart">
                  {" "}
                  <i className="fa fa-shopping-cart"></i> Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  {" "}
                  <i className="fa fa-lock"></i> Seller Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </HashRouter>
  );
};
export default UserApp;
