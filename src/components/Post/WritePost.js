import React, { useState } from "react";
import moment from "moment";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import "../../css/Post.css";
import "../../css/WritePost.css";



function WritePost() {
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
                <form>
                    <div className="post-input">
                        <input
                            value={text}
                            onChange={handleTextChange}
                            placeholder="Share your thoughts!"
                            type="text"
                        />
                    </div>
                    <input
                        type="file" 
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                        }}
                    />
                    {errorMessage !== null && (
                    <div className="form-group">
                        <span className="text-danger">{errorMessage}</span>
                    </div>
                    )}
                    <input
                        type="button"
                        className="btn btn-danger mr-5"
                        value="Cancel"
                        onClick={() => {
                        setText("");
                        setErrorMessage(null);
                        }}
                    />
                    <button onClick={handleSubmit} type="submit">Post</button>
                </form>
        </div>

    );

}

export default WritePost;