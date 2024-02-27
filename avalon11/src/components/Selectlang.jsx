import React from "react";

function Selectlang({ image,lang,Learn }) {
  return (
    <div className="flex justify-center px-4 py-5">
      <div className="w-[300px] h-[300] rounded-md border px-2 py-2 border-black-500">
        <img
          src={image}
          className="h-[200px] w-full rounded-md object-cover"
          alt="Placeholder"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{lang}</h1>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-25"
          >
            {Learn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selectlang;