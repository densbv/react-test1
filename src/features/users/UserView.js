import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserView = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  if (!user) {
    return (
      <div className="card-body">
        <h2>User not found!</h2>
      </div>
    );
  }

  return (
    <div className="card m-3">
      <div className="card-header bg-white py-1 px-3">
        <h5 className="float-start my-2 mx-2">{user.name}</h5>
        <Link to={`/users/edit/${user.id}`} className="btn btn-link">
          Edit
        </Link>
      </div>
      <div className="card-body">
        <p>{user.about}</p>
      </div>
    </div>
  );
};
