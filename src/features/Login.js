import React, { useState } from "react";

export const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const userNameChanged = (e) => setUserName(e.target.value);
  const passwordChanged = (e) => setPassword(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const token = () => {
      let rand = getRandomIntInclusive(1, 999999999);
      return { token: username + rand + password };
    };
    setToken(token());
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-lg-5 mt-3">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                onChange={userNameChanged}
                className="form-control"
                id="userName"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                onChange={passwordChanged}
                className="form-control"
                id="userPassword"
              />
            </div>
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
