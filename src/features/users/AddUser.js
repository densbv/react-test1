import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { userAdded } from "./usersSlice";

export const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [about, setAbout] = useState("");

  const dispatch = useDispatch();

  const onUserNameChanged = (e) => setUserName(e.target.value);
  const onAboutChanged = (e) => setAbout(e.target.value);
  const onSaveUserClicked = () => {
    if (userName && about) {
      dispatch(
        userAdded({
          id: nanoid(),
          userName,
          about,
        })
      );

      setUserName("");
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
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  onChange={onUserNameChanged}
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="username"
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
