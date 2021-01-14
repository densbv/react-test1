import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

import { AddUser } from "./AddUser";

export const UserList = () => {
  const users = useSelector((state) => state.users);

  const orderedUsers = users.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderUsers = orderedUsers.map((user) => (
    <div className="card" key={user.id}>
      <div className="card-body">
        <h5>
        <Link to={`/users/${user.id}`} className="nav-link" >
            {user.name}
        </Link>
        </h5>
        <p className="px-3">{user.about}</p>
        
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
