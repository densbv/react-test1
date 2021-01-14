import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { AddUser } from "./AddUser";

export const UserList = () => {
  const users = useSelector((state) => state.users);

  const renderUsers = users.map((user) => (
    <div className="card" key={user.id}>
      <div className="card-body">
        <h5>{user.userName}</h5>
        <p className="post-content">{user.about}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <AddUser />

      <h5>UserList</h5>
      {renderUsers}
    </div>
  );
};
