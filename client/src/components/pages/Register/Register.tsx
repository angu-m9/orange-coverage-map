import { Link } from "react-router-dom";

const Register = () => {
  const company = ["jazztel", "Orange", "Simio"];

  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              DNI
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Company
            </label>
            <select id="inputState" className="form-select">
              <option selected>Select Company</option>
              {company.map((a)=>{
                return <option value={a}>{a}</option>
              })}
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Postal Code
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <p>Please read the Terms and Conditions and privacy policy</p>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
              I accept the terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <Link type="submit" className="btn btn-primary mt-2" to={'/send-data'}>
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
