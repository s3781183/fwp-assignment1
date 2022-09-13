import ViewPosts from "./ViewPosts";
import WritePost from "./WritePost";

function Forum() {
  document.title="LAN | Post";

  //divide post page into write andviewing posts
  return (
    <div>
      <WritePost />
      <hr />
      <ViewPosts />
    </div>
  );
}

export default Forum;
