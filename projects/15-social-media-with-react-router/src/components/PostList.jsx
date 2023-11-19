import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <div className="container">
      <div className="row">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && (
          <div className="col-12 mt-4">
            <Welcome />
          </div>
        )}
        {!fetching &&
          postList.map((post) => (
            <div key={post.id} className="col-3 ms-3 mt-4">
              <Post post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
