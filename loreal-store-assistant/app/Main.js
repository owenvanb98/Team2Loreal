import React from "react";
import ReactDOM from "react-dom";

function Main() {
  return (
    <>
      <div>
        <p>Welcome to our app!</p>
      </div>
    </>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));
if (module.hot) {
  module.hot.accept();
}
