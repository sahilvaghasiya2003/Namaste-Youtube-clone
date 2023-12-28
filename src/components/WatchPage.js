import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
//   console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CloseMenu());
  });

  return (
    <div>
      <iframe
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>{" "}
    </div>
  );
};

export default WatchPage;
