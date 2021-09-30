import React from "react";

//topicObj = (name, featureFunction, helpDescription, helpURL)
const HelpBox = ({ name, iconClassKey, helpDescription, helpURL }) => {
    return (
        <div
            id="helpBox"
            className="absolute right-0 bottom-0 w-80 section-box rounded-tl-2xl border  border-gray-700"
        >
            <div
                id="helpBoxTitleBar"
                className="title-bar flex-col justify-end items-center gap-2 px-6 bg-white text-gray-700"
            >
                <h4>Helpbox</h4>
                <hr className="w-full h-0.5 bg-gray-700" />
            </div>
            <div
                id="helpBody"
                className="section-box-body items-center gap-4 pt-2 px-6"
            >
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="p-3 bg-yellow-200 rounded-full">
                        <div className={`icon-${iconClassKey} w-8 h-8 `}></div>
                    </div>
                    <p className="text-center text-base font-light">
                        {helpDescription}
                    </p>
                </div>
                <img
                    src="https://media.giphy.com/media/26BoCVdjSJOWT0Fpu/giphy.gif"
                    alt=""
                    srcset=""
                />
                <button className="max-w-max flex justify-center gap-1 items-center p-2 rounded-lg border border-gray-500">
                    <span className="text-base font-light">Learn more</span>
                    <div className="inline-block icon-external-link w-4 h-4"></div>
                </button>
            </div>
        </div>
    );
};

export { HelpBox };
