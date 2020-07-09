import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import { motion } from "framer-motion";

const FindThing = () => {
  const history = useHistory();
  const [userid, setUserid] = useState("");
  const [keywords, setKeywords] = useState("");
  const [data, setData] = useState([]);
  const [results, setResults] = useState(false);
  const [content, setContent] = useState(false);

  const uploadFields = () => {
    fetch(
      `https://save-things.herokuapp.com/api/v1/things/get_things/${userid}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keywords,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({
            html: data.error,
            classes: "#c62828 red darken-1",
          });
        } else {
          setData(data.things);
          setContent(true);
          setResults(true);
          M.toast({
            html: data.message,
            classes: "#00e676 green accent-3",
          });
          history.push("/find");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postData = () => {
    if (!userid || !keywords) {
      M.toast({
        html: "fields should not be empty",
        classes: "#c62828 red darken-1",
      });
      return;
    } else {
      setResults(false);
      setContent(false);
      uploadFields();
    }
  };
  return (
    <>
      <motion.div
        className="my-card"
        initial={{ y: "2vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3, duration: 1 }}
      >
        <div
          className="card auth-card input-field"
          style={{ margin: "0px auto" }}
        >
          <h2>FindThings</h2>
          <input
            type="text"
            placeholder="mobile no./your id"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
          <input
            type="text"
            placeholder="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <motion.button
            animate={{ scale: 1.2, marginTop: 20 }}
            transition={{ delay: 0.5 }}
            className="btn waves-effect waves-light purple accent-4"
            style={{ borderRadius: "5px" }}
            onClick={() => postData()}
          >
            Search <i className="material-icons right">search</i>
          </motion.button>
        </div>
      </motion.div>
      {results ? (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="card result"
          style={{ margin: "0px auto" }}
        >
          <h4>Results</h4>
        </motion.div>
      ) : null}

      <div className="home">
        {content
          ? data.map((item) => {
              return (
                <motion.div
                  animate={{ rotateZ: 360 }}
                  className="my-card"
                  key={item.id}
                >
                  <div
                    className="card auth-card"
                    style={{ margin: "0px auto" }}
                  >
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>{item.description}</p>
                      </div>
                      <div className="card-action">
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default FindThing;
