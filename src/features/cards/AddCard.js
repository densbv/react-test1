import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cardAdded } from "./cardsSlice";

import { faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "@reduxjs/toolkit";

const apiUrlRandom = "https://api.publicapis.org/random?auth=null";
const apiBehance = "https://api.publicapis.org/entries?title=Behance";

export const AddCard = () => {
  const dispatch = useDispatch();

  const [card, setCard] = useState("");

  useEffect(() => {
    fetch(apiBehance)
      .then((res) => res.json())
      .then(
        (result) => {
          const card = result.entries[0];
          dispatch(cardAdded(card));
          setCard(card);
        },
        (error) => {}
      );
  }, [dispatch]);

  console.log(card)

  return (
    <div className="col">
      <div className="card shadow">
        <div className="text-center p-3">
          <button className="rounded-circle bg-light border-0 p-4">
            <FontAwesomeIcon icon={faCity} size="lg" />
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{card.API}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};
