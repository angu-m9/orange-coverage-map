import { Link } from "react-router-dom";

const HeaderAdmin = () => {

    const decoration = {
        textDecoration : 'none'
    }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <a className="stretched-link" href="#">
              <img
                src="src/assets/images/logo-orange.svg"
                width="50"
                height="50"
                alt="Boosted - Back to Home"
                loading="lazy"
              />
            </a>
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
              <Link to={"/map-coverage"} className="nav-item" style={decoration}>
                <a className="nav-link active" aria-current="page" href="#">
                  Map
                </a>
              </Link>
              <Link to={"/data-list"} className="nav-item" style={decoration}>
                <a className="nav-link" href="#">
                  Data
                </a>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign off
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderAdmin;
