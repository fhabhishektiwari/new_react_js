import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST">
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
                name="userId"
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
                name="title"
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
                name="body"
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
                name="reactions"
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
                name="tags"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Post
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
};

export default CreatePost;
