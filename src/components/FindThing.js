import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

const FindThing = () => {
  const history = useHistory();
  const [userid, setUserid] = useState("");
  const [keywords, setKeywords] = useState("");
  const [data, setData] = useState([]);

  const uploadFields = () => {
    fetch(`/api/v1/things/get_things/${userid}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keywords,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({
            html: data.error,
            classes: "#c62828 red darken-1",
          });
        } else {
          setData(data.things);
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
      uploadFields();
    }
  };
  return (
    <>
      <div className="my-card">
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
          <button
            className="btn waves-effect waves-light purple accent-4"
            style={{ borderRadius: "5px" }}
            onClick={() => postData()}
          >
            Search <i className="material-icons right">search</i>
          </button>
        </div>
      </div>
      <div className="home">
        {data.map((item) => {
          return (
            <div className="my-card">
              <div className="card auth-card" style={{ margin: "0px auto" }}>
                <div class="card-stacked">
                  <div class="card-content">
                    <p>{item.description}</p>
                  </div>
                  <div class="card-action">
                    <a href={item.website} target="_blank">
                      {item.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FindThing;
