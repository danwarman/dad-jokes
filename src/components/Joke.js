import React, { useState, useEffect } from "react";
import {ReactComponent as Cage} from '../assets/images/nic.svg';

const Joke = () => {
  const [joke, setJoke] = useState();

  const getJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => setJoke(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <div className="card mt-5">
        <div className="row no-gutters">
          <div className="col-6 col-sm-4 mx-auto">
            <Cage />
          </div>
          <div className="col-12 col-sm-8 text-center text-sm-left">
            <div className="card-body">
              <h5 className="card-title">Wanna hear a joke?</h5>
              <p className="card-text lead">{joke ? joke.joke : "Reaching..."}</p>
              <button className="btn btn-outline-dark" onClick={getJoke}>
                How about another?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joke;
