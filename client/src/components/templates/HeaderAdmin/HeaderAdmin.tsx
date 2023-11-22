import React from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = ({ mapCoverage, dataList }: { mapCoverage: string, dataList: string }): React.JSX.Element => {

  const decoration = {
    textDecoration: 'none'
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-testid='headerAdmin'>
        
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="stretched-link">
              <img
                src="src/assets/images/logo-orange.svg"
                width="50"
                height="50"
                alt="Boosted - Back to Home"
                loading="lazy"
              />
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-end"
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/map-coverage" className={`nav-link ${mapCoverage}`} style={decoration}>
                  Mapa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/data-list" className={`nav-link ${dataList}`} style={decoration}>
                  Datos
                </Link>
              </li>
              <li className="nav-item">

                <Link to={'/login-admin'} className="nav-link">
                  Cerrar Sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderAdmin;

