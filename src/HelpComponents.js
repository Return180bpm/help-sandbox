import React from "react";
import { motion } from "framer-motion";

const IntroBox = ({ isVisible, closeIntroBox, featureIconFileNameArray }) => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    };
    const spring = {
        type: "spring",
        damping: 20,
        stiffness: 100,
    };
    return (
        <motion.div
            animate={isVisible ? "open" : "closed"}
            variants={variants}
            transition={spring}
            id="introBox"
            className="absolute right-8 bottom-24 min-w-max section-box rounded-2xl border border-gray-700 bg-white"
        >
            <img
                onClick={() => closeIntroBox()}
                src="/icons/close-box.svg"
                alt="Close the Helpbox "
                className="absolute top-4 right-4 w-6 h-6 cursor-pointer"
            />
            <div
                id="helpBoxTitleBar"
                className="title-bar flex-col justify-end items-center gap-2 px-6 bg-white text-gray-700"
            >
                <h4>What's going on here?</h4>
                <hr className="w-full h-0.5 bg-gray-700" />
            </div>
            <div
                id="introBody"
                className="section-box-body items-center gap-8 py-8 px-6"
            >
                <p className="text-center text-lg font-light">
                    This is a prototype of a help system.
                </p>

                <div
                    id="callToActionBox"
                    className="w-full flex flex-col min-w-min gap-3 text-center py-6 px-4 bg-yellow-200 rounded-2xl"
                >
                    <p className="text-base whitespace-pre-wrap font-medium">
                        Try it by hovering over these buttons {"\n"} in the
                        Workbench above.
                    </p>

                    <div
                        id="iconContainer"
                        className="w-full flex justify-center gap-4"
                    >
                        {featureIconFileNameArray.map(iconFileName => (
                            <img
                                alt="Hover over the button in the Workbench area"
                                src={`/icons/${iconFileName}.svg`}
                                className="w-8 h-8"
                                key={iconFileName}
                            ></img>
                        ))}
                    </div>
                </div>
                <button className="max-w-max flex justify-center gap-1 items-center p-2 rounded-md border border-gray-500">
                    <span className="text-sm font-light">Learn more</span>
                    <img
                        alt="Opens a help page in a new tab"
                        src="/icons/external-link.svg"
                        className="w-4 h-4"
                    ></img>
                </button>
            </div>
        </motion.div>
    );
};

const FloatingHelpButton = ({ onClickFunction }) => {
    return (
        <img
            alt="Open the Introbox"
            src="icons/question-mark-circle-noborders.svg"
            onClick={() => {
                onClickFunction();
            }}
            className="z-50 w-12 h-12 absolute bottom-8 right-8 cursor-pointer"
        />
        // <div className="p-3 bg-yellow-200 rounded-full">
        // </div>
    );
};

const HelpNudgeBox = ({ isVisible, featureName, iconFileName }) => {
    return (
        <motion.div
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : "100%" }}
            className="min-w-max absolute right-8 bottom-24 section-box flex-nowrap gap-4 p-4 text-center rounded-xl border border-gray-300"
        >
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
                Press the [h] key to see how it works.
            </p>
        </motion.div>
    );
};

//topicObj = (featureName, featureFunction, helpDescription, helpURL)
const HelpBox = ({
    isVisible,
    featureName,
    iconFileName,
    helpDescription,
    helpURL,
    helpDemoWebmFilename,
    closeHelpBox,
}) => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    };
    const spring = {
        type: "spring",
        damping: 20,
        stiffness: 100,
    };
    return (
        <motion.div
            animate={isVisible ? "open" : "closed"}
            variants={variants}
            transition={spring}
            id="helpBox"
            className="absolute right-8 bottom-24 w-80 section-box rounded-2xl border border-gray-700 bg-white"
        >
            <img
                onClick={() => closeHelpBox()}
                src="/icons/close-box.svg"
                alt="Close the Helpbox "
                className="absolute top-4 right-4 w-6 h-6 cursor-pointer"
            />
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
                <video controls autoPlay src={helpDemoWebmFilename} />
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
        </motion.div>
    );
};

export { IntroBox, FloatingHelpButton, HelpNudgeBox, HelpBox };
