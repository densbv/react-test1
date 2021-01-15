import React from "react";

import { AddCard } from "../features/cards/AddCard"

export const Dashboard = () => {
  return (
    <div className="card-body mt-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <AddCard />
      </div>
    </div>
  );
};
