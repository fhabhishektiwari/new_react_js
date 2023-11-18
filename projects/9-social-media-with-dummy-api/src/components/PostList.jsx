import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };
  return (
    <div className="container">
      <div className="row">
        {postList.length === 0 && (
          <div className="col-12 mt-4">
            <Welcome onGetPostsClick={handleGetPostsClick} />
          </div>
        )}
        {postList.map((post) => (
          <div key={post.id} className="col-3 ms-3 mt-4">
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
