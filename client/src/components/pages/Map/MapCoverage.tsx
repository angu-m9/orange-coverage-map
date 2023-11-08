
const MapCoverage = () => {
  return (
    <>
    <div className="container py-4 px-3 mx-auto d-flex justify-content-center" style={{height: '85vh'}}>
      <div className="row">
      <div className="col-6 d-flex justify-content-center align-items-center">
        <img src="src/assets/images/map-coverage.svg" className="img-thumbnail" alt="map-coverage"></img>
        </div>

        <div className="col-6 d-flex justify-content-center align-items-center flex-wrap flex-column gap-2">
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-primary">Primary</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default MapCoverage;