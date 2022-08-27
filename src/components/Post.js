import React, { useState } from "react";
import moment from "moment";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import "../css/Post.css";

function Forum() {
  
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length === 0) {
      setErrorMessage("Ensure post isnt empty.");
    } else if (text.length > 250) {
      setErrorMessage("Ensure post is less than 250 characters.");
    } else {
      setErrorMessage("");

      if (imageUpload != null) {
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload)
          .then((snapshot) => {
            getDownloadURL(imageRef)
              .then((url) => {
                setImageUrl(url);
              })
              .catch((error) => {
                console.log(error.message, "error getting image url");
              });
          })
          .catch((error) => {
            console.log(error.message, "error getting image url");
          });
      }
      var existingPosts = JSON.parse(localStorage.getItem("allPosts"));
      if (existingPosts == null) existingPosts = [];
      var newPost = {
        key: v4(),
        author: localStorage.getItem("signedInUser"),
        text: text,
        date: moment(new Date()).format("LLLL"),
        image: imageUrl,
      };
      existingPosts.push(newPost);
      localStorage.setItem("allPosts", JSON.stringify(existingPosts));
      console.log(JSON.parse(localStorage.getItem("allPosts")));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Post</legend>
          <div className="form-group">
            <textarea
              name="post"
              id="post"
              className="form-control"
              rows="3"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="App">
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </div>
          {errorMessage !== null && (
            <div className="form-group">
              <span className="text-danger">{errorMessage}</span>
            </div>
          )}
          <div className="form-group">
            <input
              type="button"
              className="btn btn-danger mr-5"
              value="Cancel"
              onClick={() => {
                setText("");
                setErrorMessage(null);
              }}
            />
            <input type="submit" className="btn btn-primary" value="Post" />
          </div>
        </fieldset>
      </form>

      <hr />
      <div className="row">
        <div></div>
        {JSON.parse(localStorage.getItem("allPosts")) == null ? (
          <span className="text-muted">No posts have been submitted.</span>
        ) : (
          JSON.parse(localStorage.getItem("allPosts")).map((x) => (
            <div
              className="border my-3 p-3"
              style={{ whiteSpace: "pre-wrap" }}
              key={x.key}
            >
              <h3 className="text-primary">{x.author}</h3>
              {x.text}
              <h4 className="text-primary">{x.date}</h4>
              {x.image !== "" ? (
                <img src={x.image} alt={x.image} width="400" height="200"></img>
              ) : (
                <br></br>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Forum;
