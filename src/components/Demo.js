import React, { useMemo, useState } from "react";
import { nthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const prime= useMemo(() => nthPrime(text),[text])

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDark && " text-white bg-gray-700")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-100"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 my-2 mx-3"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="font-bold my-5">nth Prime: {prime} </h1>
      </div>
    </div>
  );
};

export default Demo;
