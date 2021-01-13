import React from "react";

export const LoginForm = () => {
  return (
    <div className="d-flex justify-content-center">  
    <div className="card col-lg-5 mt-3">
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};
