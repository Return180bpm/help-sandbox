import React from "react";

//topicObj = (name, featureFunction, helpDescription, helpURL)
const HelpBox = ({ name, helpDescription, helpURL }) => {
    return (
        <div
            id="helpBox"
            className="w-96 h-96 flex flex-col justify-self-end self-end  border-2  border-black"
        >
            <div
                id="helpTopBar"
                className="p4 flex p-4 border-b-2 border-black text-xl"
            >
                Helpbox
            </div>
            <div
                id="helpBody"
                className="h-full flex flex-col items-baseline p-4 bg-yellow-100"
            >
                <span className="text-xl font-medium mb-2">{name}</span>
                <p className="text-l">{helpDescription}</p>
            </div>
        </div>
    );
};

export { HelpBox };
