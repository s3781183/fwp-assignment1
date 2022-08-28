import React, { useState } from "react";
import moment from "moment";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import "../../css/Post.css";
import "../../css/WritePost.css";



function WritePost() {
  //instansiate text for post
  const [text, setText] = useState("");
  //instansiate whether image uploaded for post
  const [imageUpload, setImageUpload] = useState(null);
  //instansiate the iamge's url if imsge uploaded
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //validating post
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
        author: JSON.parse(
          localStorage.getItem(localStorage.getItem("signedInUser"))
        ).name,
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
    <div className="container">
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

    </div>
  );
}

export default WritePost;
