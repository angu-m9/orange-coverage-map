import React from "react";

const Header = ({title}:{title:string}): React.JSX.Element => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
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
              <h1 className="title">{title}</h1>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
