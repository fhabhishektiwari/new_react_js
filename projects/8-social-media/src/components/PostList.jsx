import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <div className="container">
      <div className="row">
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
