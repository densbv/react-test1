import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cardAdded } from "./cardsSlice";

import { faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddCard = (props) => {
  const dispatch = useDispatch();

  const [card, setCard] = useState("");

  useEffect(() => {
    fetch(props.apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          const dataCard = result.entries[0];
          dispatch(cardAdded(dataCard));
          setCard(dataCard);
        },
        (error) => {}
      );
  }, [props.apiUrl, dispatch]);

  console.log(card);

  const cardStyle = {
    height: '184px',
  };

  return (
    <div className="col">
      <div className="card shadow">
        <div className="text-center p-3">
          <button className="rounded-circle bg-light border-0 p-4">
            <FontAwesomeIcon icon={faCity} size="lg" />
          </button>
        </div>
        <div className="card-body" style={cardStyle}>
          <h5 className="card-title">{card.API}</h5>
          <p className="card-text">
            Category: {card.Category} <br />
            Auth: {card.Auth === "" ? "none" : card.Auth} <br />
            HTTPS: {card.HTTPS ? "true" : "false"} <br />
            {card.Link}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{new Date().toDateString()}</small>
        </div>
      </div>
    </div>
  );
};
