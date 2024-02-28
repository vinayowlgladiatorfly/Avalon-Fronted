import React from "react";
import Twoletter from "./TwoLetterWrod";
import Nav from "./Nav";

function TwoLetterWord1 () {
    return (
        <>
        <div>
            <Nav />
        </div>
        <h1 className=" flex justify-center font-bold items-center text-2xl self-center w-full px-30 my-5 rounded-sm">Three Letter words Training.</h1>
        <div className="flex p-3">
        <Twoletter characters="Cat" />
        <Twoletter characters="Dog" />
        <Twoletter characters = "Fan" />
        <Twoletter  characters = "Pig" />
        </div>
        <div className="flex justify-center">
            <Twoletter characters="Cut" />
            <Twoletter characters="Keep" />
        </div>
        </>

    )
}

export default TwoLetterWord1
