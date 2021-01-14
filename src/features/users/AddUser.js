import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdded } from "./usersSlice";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const dispatch = useDispatch();

  const onnameChanged = (e) => setName(e.target.value);
  const onAboutChanged = (e) => setAbout(e.target.value);
  const onSaveUserClicked = () => {
    if (name && about) {
      dispatch(userAdded(name, about));
      setName("");
      setAbout("");
    }
  };
  return (
    <div>
      <button
        className="btn btn-danger shadow m-3"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        + Add
      </button>
      <div className="dropdown-menu col-lg-5 mt-3" aria-labelledby="dropdownMenuButton">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  name
                </label>
                <input
                  onChange={onnameChanged}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="about" className="form-label">
                  About
                </label>
                <textarea
                  onChange={onAboutChanged}
                  className="form-control"
                  id="about"
                  rows="2"
                />
              </div>

              <button
                className="btn btn-primary"
                onClick={onSaveUserClicked}
                type="button"
              >
                Save
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};
