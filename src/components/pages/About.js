import React from "react";

const About = () => {
  return (
    <div className="card mt-5">
      <div className="row no-gutters">
        <div className="card-body">
          <h5 className="card-title">About</h5>
          <p className="card-text lead">This is a quick little React App that fetches random Dad Jokes.</p>
          <p className="card-text">Built using ReactJS, Bootstrap and the <a href="https://icanhazdadjoke.com/api" title="icanhazdadjoke API" rel="external noreferrer noopener" target="_blank">'icanhazdadjoke' API</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
