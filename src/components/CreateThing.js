import React from "react";
const CreateThing = () => {
  return (
    <div className="my-card">
      <div
        className="card auth-card input-field"
        style={{ margin: "0px auto" }}
      >
        <h2 className="save-things">SaveThings</h2>
        <input type="text" placeholder="Mobile number" />
        <input type="text" placeholder="any information/url" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="keywords" />
        <button
          className="btn waves-effect waves-light purple accent-4"
          style={{ borderRadius: "5px" }}
        >
          Keep <i class="material-icons right">note_add</i>
        </button>
      </div>
    </div>
  );
};

export default CreateThing;
