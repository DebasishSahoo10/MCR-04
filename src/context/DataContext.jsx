/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useReducer, useState } from "react";
const forumData = {
  accountId: "98767-888-78767",
  username: "tanaypratap",
  name: "Tanay Pratap",
  picUrl: "http://bit.ly/42Zm7tM",
  posts: [
    {
      postId: "36635-787-65778",
      username: "tanaypratap",
      name: "Tanay Pratap",
      picUrl: "http://bit.ly/42Zm7tM",
      post: "Join InvactHQ for MBA",
      postDescription:
        "Non programmers on my timeline. Attention! After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well. Interested in helping me build this course? Join me at Invact.",
      upvotes: 350,
      downvotes: 50,
      tags: ["mba", "business", "bootcamp"],
      createdAt: "2023-06-24T12:00:00Z",
      comments: [
        {
          commentId: "89898-856-87576",
          username: "ashwin4real",
          picUrl: "http://bit.ly/42Zm7tM",
          likes: 0,
          comment: "Interested",
          createdAt: "2023-06-24T12:01:00Z",
        },
      ],
      isBookmarked: false,
    },
    {
      postId: "36698-343-321232",
      username: "trishajain",
      name: "Trisha Jain",
      picUrl: "http://bit.ly/42Zm7tM",
      post: "Can I learn HTML, CSS, and JavaScript in 1 year?",
      postDescription:
        "I am looking to make my career in web development and want to learn these technologies. Can I learn these in 1 year and get a job?",
      upvotes: 150,
      downvotes: 0,
      tags: ["html", "javascript", "web development"],
      createdAt: "2023-06-24T12:54:00Z",
      comments: [],
      isBookmarked: false,
    },
  ],
};

export const DataContext = createContext();
const handleEvents = (state, action) => {
  switch (action.type) {
    case "HANDLE_BOOKMARK":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.postId === action.payload) {
            post.isBookmarked = !post.isBookmarked
            return post;
          } else {
            return post;
          }
        }),
      };
    case "HANDLE_UPVOTE" : return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.postId === action.payload) {
           post.upvotes+=1
           return post
          } else {
            return post;
          }
        }),
      };
      case "HANDLE_DOWNVOTE" : return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.postId === action.payload) {
           post.downvotes+=1
           return post
          } else {
            return post;
          }
        }),
      };
    default:
      return state;
  }
};
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleEvents, forumData);
  const [sort, setSort] = useState("latest");
  useEffect(() => {
    console.log(state.posts);
  }, [state]);
  return (
    <DataContext.Provider value={{ state, dispatch, sort, setSort }}>
      {children}
    </DataContext.Provider>
  );
};
