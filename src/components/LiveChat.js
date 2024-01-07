import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(15),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div>
        <div className="m-2 p-2 w-full h-[450px] overflow-y-scroll border border-black bg-slate-100 rounded-lg flex flex-col-reverse">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} message={c.message} name={c.name} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "sahil",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full p-2 ml-2 border border-black"
      >
        <input
          className="w-72 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100 ">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
