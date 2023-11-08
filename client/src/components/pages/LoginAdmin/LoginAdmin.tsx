import { Link } from "react-router-dom";

const LoginAdmin = () => {
  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h4>Identify</h4>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            User
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="User"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
          />
        </div>
        <Link to={'/map-coverage'} type="button" className="btn btn-primary">Login</Link>
      </div>
    </>
  );
};

export default LoginAdmin;
