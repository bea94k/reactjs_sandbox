import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Person(props) {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

const app = (
  <div>
    <Person name="Maria" title="CEO" age="39" />
    <Person name="Joe" title="Developer" age="32" />
    <Person name="Tony" title="Designer" age="92" />
  </div>
);

// render it in document.#root
ReactDOM.render(app, document.querySelector("#root"));
