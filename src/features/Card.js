import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cardAdded } from "./cardSlice";

import { faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const apiUrlRandom = "https://api.publicapis.org/random?auth=null";
const apiBehance = "https://api.publicapis.org/entries?title=Behance";

export const Card = () => {
  const [card, setCard] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const cardStatus = useSelector((state) => state.card.status);
  const errors = useSelector((state) => state.card.error);

  useEffect(() => {
    fetch(apiUrlRandom)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.entries[0])
          dispatch(
            cardAdded({
              card: result.entries[0],
            })
          )
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {

        }
      );
  });


  return (
    <div className="col">
      <div className="card shadow">
        <div className="text-center p-3">
          <button className="rounded-circle bg-light border-0 p-4">
            <FontAwesomeIcon icon={faCity} size="lg" />
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
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
