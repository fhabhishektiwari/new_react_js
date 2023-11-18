import { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // const [fetchedData, setFetchedData] = useState(false);
  const [fetching, setfetching] = useState(false);

  // this is the one Way
  // if (!fetchedData) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  //   setFetchedData(true);
  // }

  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      });
    return () => {
      console.log("Cleaning up useEffect.");
      controller.abort();
    };
  }, []);

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
