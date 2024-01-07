import React, { useEffect, useState } from "react";
import { toogleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { chacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // console.log(searchQuery);
    //Api Call
    //!make api call for every key press;
    //!but if the differance between 2 api call is lasthan 200ms
    //!decline API CALL
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    //?timer
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);

    dispatch(chacheResults({ [searchQuery]: json[1] }));
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://as1.ftcdn.net/v2/jpg/05/07/46/84/1000_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 pl-5 rounded-l-full"
            type="text"
            value={searchQuery}
            placeholder="search"
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-[28.8rem] shadow-lg rounded-3xl border border-gray-50">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="py-1 shadow-sm hover:bg-gray-100"
                  onClick={() => setSearchQuery(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" ">
        <img
          className="h-8 "
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
