const SendData = () => {
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <img
          src="src/assets/icons/wifi-icon.svg"
          alt="register-icon"
          className="m-3"
          style={{ width: "70%", height: "80%" }}
        />
        <button type="button" className="btn btn-primary">
          Send Data
        </button>
      </div>
    </>
  );
};

export default SendData;
