import React from "react";
import "../../css/Post.css";

function ViewPosts() {
  return (
    <div className="row">
      {/* check if posts exists, it there is none display message */}
      {JSON.parse(localStorage.getItem("allPosts")) == null ? (
        <span className="text-muted">No posts have been submitted.</span>
      ) : (
        //if there is at least one post, iterate through posts
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
  );
}

export default ViewPosts;
