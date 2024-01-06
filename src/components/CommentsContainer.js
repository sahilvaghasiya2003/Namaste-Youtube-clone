import React from "react";

const CommentsData = [
  {
    name: "sahil",
    text: "nice Video",
    replies: [
      {
        name: "sahil2",
        text: "good",
        replies: [
          {
            name: "sahil3",
            text: "true",
            replies: [],
          },
        ],
      },
      {
        name: "sahil",
        text: "good",
        replies: [],
      },
    ],
  },
  {
    name: "sahil",
    text: "nice Video",
    replies: [ {
        name: "sahil3",
        text: "true",
        replies: [ {
            name: "sahil3",
            text: "true",
            replies: [],
          }, {
            name: "sahil3",
            text: "true",
            replies: [],
          },],
      },],
  },
  {
    name: "sahil",
    text: "nice Video",
    replies: [],
  },
  {
    name: "sahil",
    text: "nice Video",
    replies: [ {
        name: "sahil3",
        text: "true",
        replies: [],
      },],
  },
  {
    name: "sahil",
    text: "nice Video",
    replies: [],
  },
  {
    name: "sahil",
    text: "nice Video",
    replies: [],
  },
  {
    name: "sahil",
    text: "nice Video",
    replies: [],
  },
  {
    name: "sahil",
    text: "nice Video",
    replies: [ {
        name: "sahil3",
        text: "true",
        replies: [],
      }, {
        name: "sahil3",
        text: "true",
        replies: [ {
            name: "sahil3",
            text: "true",
            replies: [],
          }, {
            name: "sahil3",
            text: "true",
            replies: [],
          },],
      },],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 shadow-sm p-2 rounded-sm my-2">
      <img
        className="w-8 h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt=""
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-3 border border-l-black ml-5">
      <CommentList comments={comment.replies}/>

      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-3xl font-bold">Comments:</h1>
      <CommentList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
