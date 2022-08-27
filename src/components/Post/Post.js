import React, { useState } from "react";
import ViewPosts from "./ViewPosts";
import WritePost from "./WritePost";

function Forum() {

  return (
      <div className="body">
        <WritePost/>
      <hr />
        <ViewPosts/>
    </div>
  );
}

export default Forum;
