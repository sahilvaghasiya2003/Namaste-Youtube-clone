import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 "
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-icon"
      />
      <div className="px-2">
        <span className="pr-2 font-bold">{name}</span>
        <span className="">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
