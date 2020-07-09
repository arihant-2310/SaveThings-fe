import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import { motion } from "framer-motion";
import Loader from "./Loader";

const CreateThing = () => {
  const history = useHistory();
  const [userid, setUserid] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [information, setInformation] = useState("");
  const [loading, setLoading] = useState(false);

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
          setLoading(false);
        } else {
          M.toast({ html: data.message, classes: "#00e676 green accent-3" });
          setUserid("");
          setDescription("");
          setInformation("");
          setKeywords("");
          setLoading(false);

          history.push("/create");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const postData = () => {
    setLoading(true);
    if (isNaN(userid) || userid.length < 5) {
      M.toast({
        html: "userid should be atleast 5 digits",
        classes: "#c62828 red darken-1",
      });
      setLoading(false);
      return;
    }
    if (description && information && keywords) {
      uploadFields();
    } else {
      M.toast({
        html: "fields should not be empty",
        classes: "#c62828 red darken-1",
      });
      setLoading(false);
      return;
    }
  };
  return (
    <>
      {!loading ? (
        <motion.div
          className="my-card"
          initial={{ y: "2vw" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 1 }}
        >
          <div
            className="card auth-card input-field"
            style={{ margin: "0px auto" }}
          >
            <motion.h2
              className="save-things"
              whileHover={{
                color: "rgb(170, 0, 255)",
              }}
            >
              SaveThings
            </motion.h2>
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
              transition={{ delay: 1 }}
              whileHover={{ textShadow: "0px 0px 8px rgb(255,255,255)" }}
              className="btn waves-effect waves-light purple accent-4"
              style={{ borderRadius: "5px" }}
              onClick={() => postData()}
            >
              Keep <i className="material-icons right">note_add</i>
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <div style={{ marginTop: "250px" }}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default CreateThing;
