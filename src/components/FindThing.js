import React from "react";
const FindThing = () => {
  return (
    <div className="my-card">
      <div
        className="card auth-card input-field"
        style={{ margin: "0px auto" }}
      >
        <h2>FindThings</h2>
        <input type="text" placeholder="mobile no./your id" />
        <input type="text" placeholder="keywords" />
        <button
          className="btn waves-effect waves-light purple accent-4"
          style={{ borderRadius: "5px" }}
        >
          Search <i className="material-icons right">search</i>
        </button>
      </div>
    </div>
  );
};

export default FindThing;
