import React from "react";
import { toogleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {

  const dispatch = useDispatch();
const toggleMenuHandler = ()=>{
  dispatch(toogleMenu());
}

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img className="h-8 cursor-pointer"
        onClick={()=>toggleMenuHandler()}
        src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        alt="menu"
        />
        <a href="/">
        <img className="h-8 mx-2"
          src="https://as1.ftcdn.net/v2/jpg/05/07/46/84/1000_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
          alt="youtube-logo"
          />
          </a>
      </div>
      <div className="col-span-10 px-10" >
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search</button>
      </div>
      <div className=" ">
        <img className="h-8 "
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
