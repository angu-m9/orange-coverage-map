import React from "react";
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import HeatMap from "../../templates/HeatMap/HeatMap";

const MapCoverage = (): React.JSX.Element => {
  return (
    <>
      <HeaderAdmin mapCoverage={"active"} dataList={""} />

      <div className="container py-4 px-3 mx-auto" style={{ height: "85vh" }}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <HeatMap />
          </div>
          <div className="col-12 d-flex justify-content-center align-content-center flex-wrap gap-2 mt-3">
            <button
              className="btn rounded"
              style={{
                color: "white",
                backgroundColor: "#cd3c14",
                width: "8rem",
              }}
            >
              4G
              <img src="src/assets/icons/4g.svg" alt="" />
            </button>

            <button
              className="btn rounded "
              style={{
                color: "white",
                backgroundColor: "#ffcc00",
                width: "8rem",
              }}
            >
              3G
              <img src="src/assets/icons/3g.svg" alt="" />
            </button>
            <button
              className="btn rounded"
              style={{
                color: "white",
                backgroundColor: "#32c832",
                width: "8rem",
              }}
            >
              2G
              <img src="src/assets/icons/2g.svg" alt="" />
            </button>
            <button
              className="btn rounded"
              style={{
                color: "white",
                backgroundColor: "#527edb",
                width: "8rem",
              }}
            >
              1G
              <img src="src/assets/icons/1g.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapCoverage;
