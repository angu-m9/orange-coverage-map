
const Register = () => {

    const compañias = ["jazztel", "Orange", "Simio"];

  return (
    <>
       <div className="container py-4 px-3 mx-auto">
          <form>
        <div className="mb-3 mt-2">
          <label htmlFor="requiredSelect" className="form-label is-required">
            Select company<span className="visually-hidden"> (required)</span>
          </label>
          <select id="requiredSelect" className="form-select" required>
            <option value="">Select company</option>
            {compañias.map((a) => {
              return (
                <option key={a} value="">
                  {a}
                </option>
              );
            })}
          </select>
        </div>

        {/* input */}

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Lastname"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Postal Code"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I accept the Terms
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
      </div>
    </>
  )
}

export default Register;