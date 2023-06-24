import { useParams } from "react-router";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { SideSort } from "../components/SideSort";
import HomeStyles from "./Home.module.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const IndividualPost = () => {
  const { state, dispatch } = useContext(DataContext);
  const { postID } = useParams();
  const selectedPost = state.posts.filter((post) => post.postId === postID);
  // console.log(selectedPost)
  const handleBookmark = (key) => {
    dispatch({ type: "HANDLE_BOOKMARK", payload: key });
  };
  const handleUpvote = (key) => {
    dispatch({ type: "HANDLE_UPVOTE", payload: key });
  };
  const handleDownvote = (key) => {
    dispatch({ type: "HANDLE_DOWNVOTE", payload: key });
  };
  return (
    <>
      <div className={HomeStyles.header}>
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          color: "black",
          justifyContent: "space-between",
          minWidth: "90vw",
        }}
        
      >
        <SideNav />
        <div
          style={{
            height: "90vh",
            marginTop : "20px"
        
          }}
        >
          <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {selectedPost.map((post) => {
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
                        <i onClick={() => handleUpvote(post.postId)}>⬆️</i>
                        <p>
                          {post.upvotes > post.downvotes
                            ? post.upvotes
                            : `-${post.downvotes}`}
                        </p>
                        <i onClick={() => handleDownvote(post.postId)}>⬇️</i>
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
                        <div style={{ display: "flex", gap: "10px" }}>
                          <img
                            src={post.picUrl}
                            alt=""
                            width={30}
                            height={30}
                          />
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
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button>Comment</button>
                      <button>Share</button>
                      <button onClick={() => handleBookmark(post.postId)}>
                        {post.isBookmarked ? "Bookmarked" : "Bookmark"}
                      </button>
                    </div>
                    <hr />
                    <div>
                      {selectedPost[0].comments.map((comment) => {
                        return (
                          <>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={comment.picUrl}
                                alt=""
                                width={30}
                                height={30}
                              />
                              <div>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                  alignItems: "flex-start",
                                }}
                              >
                                <small style={{ margin: "0px" }}>
                                  Posted By @{comment.username} :
                                </small>
                                <small style={{ margin: "0px" }}>
                                  Replying to @{post.username}
                                </small>
                              </div>
                              <div
                                style={{
                                  textAlign: "left"
                                }}
                              >
                                <b>{comment.comment}</b>
                              </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <SideSort />
      </div>
    </>
  );
};
