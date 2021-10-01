import React from "react";

const FloatingHelpButton = () => {
    return (
        <img
            alt="Open the helpbox"
            src="icons/question-mark-circle-noborders.svg"
            className="w-12 h-12 absolute bottom-8 right-8"
        />
        // <div className="p-3 bg-yellow-200 rounded-full">
        // </div>
    );
};

const HelpNudgeBox = ({ featureName, iconFileName }) => {
    return (
        <div className="min-w-max absolute right-8 bottom-8 section-box flex-nowrap gap-4 p-4 text-center rounded-xl border border-gray-300">
            <div className="flex flex-col items-center justify-center gap-2">
                {featureName && (
                    <div className="inline p-3 bg-yellow-200 rounded-full">
                        <img
                            alt={`${featureName}`}
                            src={`/icons/${iconFileName}.svg`}
                            className={`w-8 h-8`}
                        ></img>
                    </div>
                )}
                <p className="text-sm">Not sure what this does?</p>
            </div>
            <p className="text-base font-light">
                Press the [k] key to see how it works.
            </p>
        </div>
    );
};

//topicObj = (featureName, featureFunction, helpDescription, helpURL)
const HelpBox = ({ featureName, iconFileName, helpDescription, helpURL }) => {
    return (
        <div
            id="helpBox"
            className="absolute right-0 bottom-0 w-80 section-box rounded-tl-2xl border  border-gray-700 bg-white"
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
                className="section-box-body items-center gap-4 pt-2 px-6 pb-4"
            >
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="p-3 bg-yellow-200 rounded-full">
                        {featureName && (
                            <img
                                alt={`${featureName}`}
                                src={`/icons/${iconFileName}.svg`}
                                className={`w-8 h-8`}
                            ></img>
                        )}
                    </div>
                    <p className="text-center text-base font-light">
                        {helpDescription}
                    </p>
                </div>
                <img
                    src="https://media.giphy.com/media/26BoCVdjSJOWT0Fpu/giphy.gif"
                    alt="Real footage of your input being picked up"
                    srcset=""
                />
                <button className="max-w-max flex justify-center gap-1 items-center p-2 rounded-md border border-gray-500">
                    <span className="text-base font-light">Learn more</span>
                    <img
                        alt="Opens a help page in a new tab"
                        src="/icons/external-link.svg"
                        className="w-4 h-4"
                    ></img>
                </button>
                <div className="w-full flex justify-between">
                    <img
                        alt="Star this topic so you can find it easier"
                        src="/icons/star.svg"
                        className="w-6 h-6"
                    ></img>
                    <img
                        alt="View your help history"
                        src="/icons/history.svg"
                        className="w-6 h-6"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export { FloatingHelpButton, HelpNudgeBox, HelpBox };
