import React, { useState } from "react";
import moment from "moment";

function Forum(props) {
  const [post, setPost] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    setPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (post.length === 0) {
      setErrorMessage("Ensure post isnt empty.");
    } else if (post.length > 250) {
      setErrorMessage("Ensure post is less than 250 characters.");
    } else {
      setErrorMessage("");

      var existingPosts = JSON.parse(localStorage.getItem("allPosts"));
      if (existingPosts == null) existingPosts = [];
      var newPost = {
        author: localStorage.getItem("signedInUser"),
        text: post,
        date: moment(new Date()).format("LLLL"),
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
              value={post}
              onChange={handleInputChange}
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
                setPost("");
                setErrorMessage(null);
              }}
            />
            <input type="submit" className="btn btn-primary" value="Post" />
          </div>
        </fieldset>
      </form>

      <hr />
      <h1>Forum</h1>
      <div>
        {JSON.parse(localStorage.getItem("allPosts")) == null ? (
          <span className="text-muted">No posts have been submitted.</span>
        ) : (
          JSON.parse(localStorage.getItem("allPosts")).map((x) => (
            <div className="border my-3 p-3" style={{ whiteSpace: "pre-wrap" }}>
              <h3 className="text-primary">{x.author}</h3>
              {x.text}
              <h4 className="text-primary">{x.date}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Forum;
