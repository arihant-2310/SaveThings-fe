import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import { motion } from "framer-motion";

const CreateThing = () => {
  const history = useHistory();
  const [userid, setUserid] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [information, setInformation] = useState("");

  const uploadFields = () => {
    fetch(
      `https://save-things.herokuapp.com/api/v1/things/create_thing/${userid}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
          keywords,
          website: information,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-1" });
        } else {
          M.toast({ html: data.message, classes: "#00e676 green accent-3" });
          setUserid("");
          setDescription("");
          setInformation("");
          setKeywords("");
          history.push("/create");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const postData = () => {
    if (isNaN(userid) || userid.length < 5) {
      M.toast({
        html: "userid should be atleast 5 digits",
        classes: "#c62828 red darken-1",
      });
      return;
    }
    if (description && information && keywords) {
      uploadFields();
    } else {
      M.toast({
        html: "fields should not be empty",
        classes: "#c62828 red darken-1",
      });
      return;
    }
  };
  return (
    <div className="my-card">
      <div
        className="card auth-card input-field"
        style={{ margin: "0px auto" }}
      >
        <h2 className="save-things">SaveThings</h2>
        <input
          type="text"
          placeholder="Mobile number"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <input
          type="text"
          placeholder="any information/url"
          value={information}
          onChange={(e) => setInformation(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <motion.button
          animate={{ scale: 1.2, marginTop: 20 }}
          className="btn waves-effect waves-light purple accent-4"
          style={{ borderRadius: "5px" }}
          onClick={() => postData()}
        >
          Keep <i className="material-icons right">note_add</i>
        </motion.button>
      </div>
    </div>
  );
};

export default CreateThing;
