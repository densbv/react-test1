import React from "react";

import { AddCard } from "../features/cards/AddCard";

const apiUrl = [
  "https://api.publicapis.org/entries?title=Behance",
  "https://api.publicapis.org/random?auth=null",
];

export const Dashboard = () => {
  return (
    <div className="card-body mt-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <AddCard apiUrl={apiUrl[0]} />
        <AddCard apiUrl={apiUrl[1]} />
        <AddCard apiUrl={apiUrl[1]} />
        <AddCard apiUrl={apiUrl[1]} />
        <AddCard apiUrl={apiUrl[1]} />
        <AddCard apiUrl={apiUrl[1]} />
      </div>
    </div>
  );
};
