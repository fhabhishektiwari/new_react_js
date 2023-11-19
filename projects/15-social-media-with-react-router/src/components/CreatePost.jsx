import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row mt-4 ms-4">
          <div className="col-8">
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">
                Enter your User Id here
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your User Id"
                id="userId"
                autoComplete="off"
                ref={userIdElement}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Post Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="How are you feeling today..."
                id="title"
                autoComplete="off"
                ref={postTitleElement}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Post Content
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Tell us more about it"
                id="body"
                autoComplete="off"
                rows={5}
                ref={postBodyElement}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reactions" className="form-label">
                Number of Reactions
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="How many people reacted this post..."
                id="reactions"
                autoComplete="off"
                ref={reactionsElement}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tags" className="form-label">
                Enter your hashtags here
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Please enter tags using space"
                id="tags"
                autoComplete="off"
                ref={tagsElement}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
