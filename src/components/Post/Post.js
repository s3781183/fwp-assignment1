import ViewPosts from "./ViewPosts";
import WritePost from "./WritePost";

function Forum() {
  document.title="LAN | Post";
  return (
    <div>
      <WritePost />
      <hr />
      <ViewPosts />
    </div>
  );
}

export default Forum;
