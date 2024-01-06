import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};
  return (
    <div className="p-2 m-2 w-[380px] shadow-lg">
      <img className="rounded-lg" src={thumbnails.high.url} alt="Thambnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

//Higher Order Component
export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-900">
      <VideoCard info={info} />
      
    </div>
  );
};

export default VideoCard;
