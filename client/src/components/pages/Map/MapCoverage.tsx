import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import HeatMap from "../../templates/HeatMap/HeatMap";

const MapCoverage = () => {
  const text = {
    color: 'white',
  };
  const button1G = {
    backgroundColor: '#527EDB',
    width: '8rem'
  };
  const button2G = {
    backgroundColor: '#32C832',
    width: '8rem'
  };
  const button3G = {
    backgroundColor: '#FFCC00',
    width: '8rem'
  };
  const button4G = {
    backgroundColor: '#CD3C14',
    width: '8rem'
  };
  const button5G = {
    backgroundColor: '#FF6600',
    width: '8rem'
  };

  return (
    <>
      <HeaderAdmin mapCoverage={'active'} dataList={''} />

      <div className="container py-4 px-3 mx-auto" style={{ height: '85vh' }}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">

          <HeatMap />

          </div>
          <div className="col-12 d-flex justify-content-center align-content-center flex-wrap gap-2 mt-3">
            <button className="btn rounded" style={{ ...text, ...button5G }}>5G<img src="src/assets/icons/4g.svg" alt="" /></button>
            <button className="btn rounded" style={{ ...text, ...button4G }}>4G<img src="src/assets/icons/4g.svg" alt="" /></button>
            <button className="btn rounded" style={{ ...text, ...button3G }}>3G<img src="src/assets/icons/3g.svg" alt="" /></button>
            <button className="btn rounded" style={{ ...text, ...button2G }}>2G<img src="src/assets/icons/2g.svg" alt="" /></button>
            <button className="btn rounded" style={{ ...text, ...button1G }}>1G<img src="src/assets/icons/1g.svg" alt="" /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapCoverage;