// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react",
// );
// console.log(heading); //An object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
<div id="parent">
      <div id="child">
        <h1>I'm a h1 tag</h1>
      </div>
    </div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm a h1 tag"),
//   ),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);

// root.render(parent);

/* Pass 2 children
<div id="parent">
      <div id="child">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
      </div>
    </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);//It will only render the root element
