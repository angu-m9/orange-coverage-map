import React from "react";
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import HeatMap from "../../templates/HeatMap/HeatMap";
import './mapCoverage.style.css'

const MapCoverage = (): React.JSX.Element => {
  return (
    <>
      <HeaderAdmin mapCoverage={"active"} dataList={""} />

<div className="black">
      <div className="container py-4 px-3 mx-auto container__map" >
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">

            <HeatMap />

          </div>
          <div className="col-12 d-flex justify-content-center align-content-center flex-wrap gap-2 mt-3">
            <button
              className="btn rounded " id="button4g"
            >
              4G
              <img src="src/assets/icons/4g.svg" alt="button4g"  />
            </button>

            <button
              className="btn rounded" id="button3g"
            >
              3G
              <img src="src/assets/icons/3g.svg" alt="button3g" />
            </button>
            <button
              className="btn rounded" id="button2g"
            >
              2G
              <img src="src/assets/icons/2g.svg" alt="button2g" />
            </button>
            <button
              className="btn rounded " id="button1g"
            >
              1G
              <img src="src/assets/icons/1g.svg" alt="button1g" />
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MapCoverage;
