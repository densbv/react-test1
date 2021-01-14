import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userUpdated } from "./usersSlice";

export const EditUser = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const [name, setName] = useState(user.name);
  const [about, setAbout] = useState(user.about);

  const dispatch = useDispatch();
  const history = useHistory();

  const nameChanged = (e) => setName(e.target.value);
  const aboutChanged = (e) => setAbout(e.target.value);

  const saveClicked = () => {
    if (name && about) {
      dispatch(userUpdated({ id: userId, name, about }));
      history.push(`/users/${userId}`);
    }
  };

  return (
    <div className="card m-3">
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              onChange={nameChanged}
              type="text"
              className="form-control"
              id="name"
              value={name}
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="about" className="form-label">
              About
            </label>
            <textarea
              onChange={aboutChanged}
              className="form-control"
              id="about"
              rows="2"
              value={about}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={saveClicked}
            type="button"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
