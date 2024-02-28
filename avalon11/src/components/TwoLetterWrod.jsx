import React from "react";
import Nav from "./Nav";
function Twoletter({characters})
{
    return(
        <>
        <div className="flex justify-center px-1 py-5 h-[200]">
        <div className="w-[200px] h-[150] rounded-md px-2 py-2 border-black-500 border-2">
          <img
            src="https://via.placeholder.com/300x200"
            className="h-[150px] w-full rounded-md object-cover"
            alt="Placeholder"
          />
          <div className="flex justify-center">
            <h1 className=" font-bold items-center text-2xl self-center w-full px-30 mx-20 rounded-sm">{characters}</h1>
          </div>
        </div>
      </div>
      </>


    )


}
export default Twoletter