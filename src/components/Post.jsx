import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";

export const Post = () => {
  const { state, sort, dispatch } = useContext(DataContext);
  const sortedState = state.posts.sort((a, b) =>
    sort === "latest"
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : b.upvotes - a.upvotes
  );
  const handleBookmark = (key) => {
    dispatch({type : "HANDLE_BOOKMARK", payload : key})
  }
  const handleUpvote = (key) => {
    dispatch({type : "HANDLE_UPVOTE", payload : key})
  }
  const handleDownvote= (key) => {
    dispatch({type : "HANDLE_DOWNVOTE", payload : key})
  }
  return (
    <div
      style={{
        overflowX: "hidden",
        height: "90vh",
        overflowY: "scroll",
        position: "relative",
        marginTop : "1em",
        paddingRight : "10px"
      }}
      id="postContainer"
    >
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px",marginBottom:'20px' }}>
        {sortedState.map((post) => {
          return (
            <li
              key={post.postId}
              style={{
                listStyle: "none",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div style={{ maxWidth: "600px" }}>
                <div
                  className="postandvote"
                  style={{ display: "flex", gap: "30px" }}
                >
                  <div className="vote">
                    <i onClick={()=>handleUpvote(post.postId)}>⬆️</i>
                    <p>
                      {post.upvotes > post.downvotes
                        ? post.upvotes
                        : `-${post.downvotes}`}
                    </p>
                    <i onClick={()=>handleDownvote(post.postId)}>⬇️</i>
                  </div>
                  <div
                    className="post"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex" , gap : "10px" }}>
                      <img src={post.picUrl} alt="" width={30} height={30} />
                      <p style={{ marginTop: "2px" }}>
                        Posted By @{post.username}
                      </p>
                    </div>
                    <h2>{post.post}</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {post.tags.map((tag) => (
                        <p
                          key={tag}
                          style={{
                            margin: "0",
                            backgroundColor: "orange",
                            padding: "2px 8px",
                            borderRadius: "5px",
                          }}
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                    <p className="description">{post.postDescription}</p>
                  </div>
                </div>
                <hr />
                <div
                  className="postbuttons"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <NavLink to={`/post/${post.postId}`}><button>Comment</button></NavLink>
                  <button>Share</button>
                  <button onClick={()=>handleBookmark(post.postId)}>{post.isBookmarked ? "Bookmarked" : "Bookmark"}</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
