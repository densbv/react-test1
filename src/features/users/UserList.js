import React from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
  return (
    <div>
      <Link to="/users/add" className="btn btn-danger">
        + Add
      </Link>
      <h5>UserList</h5>
    </div>
  );
};
