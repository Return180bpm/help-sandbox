import {
    IntroBox,
    FloatingHelpButton,
    HelpNudgeBox,
    HelpBox,
} from "./HelpComponents.js";
import { Workbench } from "./Workbench";
import "./App.css";
import { useState, useEffect, useRef, useCallback } from "react";

const ControlButton = ({
    onClickFunction,
    onMouseEnterFunction,
    onMouseLeaveFunction,
    featureName,
    iconFileName,
}) => {
    const handleOnClick = () => {
        // Get the string that's in the input field
        const inputString = document.getElementById("inputField").value;
        let outputString = "";

        // Apply the transformotion to the input
        outputString = onClickFunction(inputString);

        // Put the outputString where it belongs
        document.getElementById("outputField").value = outputString;
    };

    return (
        <button
            onClick={() => handleOnClick()}
            onMouseEnter={() => onMouseEnterFunction()}
            onMouseLeave={() => onMouseLeaveFunction()}
            id={featureName}
            className={`icon-${iconFileName} w-8 h-8`}
        >
            <img
                src={`icons/${iconFileName}.svg`}
                alt={`$
            {featureName}`}
                className="w-full h-full"
            />
            {/* {buttonText} */}
        </button>
    );
};

// Define Functions for demo features
const DEFAULT_STRING = "I'm all out of strings";
const _addDecoration = inputString => {
    let outputString = "";
    const decoString = "╰(▔∀▔)╯";

    outputString = `${decoString}${inputString || DEFAULT_STRING}${decoString}`;

    return outputString;
};

const _makeAesthetic = inputString => {
    let outputString = "";
    const aesthetic = " ";
    const inputString_ = inputString || DEFAULT_STRING;

    outputString = inputString_.toUpperCase().split("").join(aesthetic);

    return outputString;
};

const _sacrifice = inputString => {
    let outputString = "";

    const answer = inputString
        ? `Your ${inputString.length} characters have been sacrificed. Thank You for your contribution`
        : "Please fill in the input box above";

    outputString = answer;
    document.getElementById("inputField").value = "";

    return outputString;
};

// Abstracts features so everything is in one place
const allFeatures = [];
class Feature {
    constructor(
        featureName,
        featureFunction,
        iconFileName,
        helpDescription,
        helpDemoWebmFilename,
        helpURL
    ) {
        this.featureName = featureName;
        this.featureFunction = featureFunction;
        this.iconFileName = iconFileName;
        this.helpDescription = helpDescription;
        this.helpDemoWebmFilename = helpDemoWebmFilename;
        this.helpURL = helpURL;
        allFeatures.push(this);
    }
}

// Each object represents a feature
const AddDecoration = new Feature(
    "AddDecoration",
    _addDecoration,
    "fingerprint",
    "Add a decororation to the input text.",
    "helpAddDecoration.webm",
    "https://foo.bar"
);
const MakeAesthetic = new Feature(
    "MakeAesthetic",
    _makeAesthetic,
    "columns",
    "Make the input text aesthetic.",
    "helpMakeAesthetic.webm",
    "https://foo.bar"
);
const Sacrifice = new Feature(
    "Sacrifice",
    _sacrifice,
    "truck",
    "Sacrifice your input to an Elder God. The Elder God is randomly chosen. We use DHL for shipping.",
    "https://i.giphy.com/media/26BoCVdjSJOWT0Fpu/giphy.mp4",
    "https://foo.bar"
);

function App() {
    const [currentTopicObj, setCurrentTopicObj] = useState(null);
    const [doesWantHelp, setDoesWantHelp] = useState(false);
    const [isLingering, setIsLingering] = useState(false);
    const [isIntroBoxVisible, setIsIntroBoxVisible] = useState(true);
    const currentTopicObjRef = useRef(null);
    // useEffect(() => {
    //     currentTopicObjRef.current = currentTopicObj;
    // }, [currentTopicObj]);

    // Add hotkey funktionality
    // This makes the helpbox appear with the element that is being currently hovered over, or was last hovered over
    const handleKeyDownCallback = useCallback(
        e => {
            if (e.keyCode === 72) {
                if (currentTopicObj) {
                    setDoesWantHelp(!doesWantHelp);
                }
            }
        },
        [setDoesWantHelp, doesWantHelp, currentTopicObj]
    );
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDownCallback);
        return () => {
            window.removeEventListener("keydown", handleKeyDownCallback);
        };
    }, [handleKeyDownCallback]);

    // In this alternative version, the hotkeys only work while hovering over a symbol
    //
    // useEffect(() => {
    //     if (isLingering) {
    //         window.addEventListener("keydown", handleKeyDownCallback);
    //     } else {
    //         window.removeEventListener("keydown", handleKeyDownCallback);
    //     }

    //     return () => {
    //         window.removeEventListener("keydown", handleKeyDownCallback);
    //     };
    // }, [isLingering, handleKeyDownCallback]);

    return (
        <div
            id="container"
            className="overflow-hidden w-6/12 h-full mx-auto p-6 flex flex-col "
        >
            <header className="flex flex-col gap-2">
                <h1 className="whitespace-pre-wrap ">Helper {"\n"}Sandbox</h1>
                <hr className="w-full h-1 bg-black" />
                <img
                    alt="Open this project on github"
                    src="icons/github.svg"
                    className="w-5 h-5"
                />
            </header>

            <main className="relative flex-grow flex justify-center items-start pt-12 ">
                <div
                    id="workbench"
                    className="section-box w-96 rounded-lg shadow-sm"
                >
                    <div
                        id="workbenchTitleBar"
                        className="title-bar bg-pink-600 text-white"
                    >
                        <h4>Workbench</h4>
                    </div>
                    <div id="workbenchBody" className="section-box-body py-8">
                        <input
                            type="text"
                            id="inputField"
                            className="input-simple"
                            placeholder="Input"
                            name="inputField"
                            defaultValue=""
                        />
                        <div
                            id="buttonContainer"
                            className="w-full flex justify-center gap-4"
                        >
                            {allFeatures.map((feature, index) => (
                                <ControlButton
                                    onClickFunction={feature.featureFunction}
                                    onMouseEnterFunction={() => {
                                        setIsIntroBoxVisible(false);
                                        setCurrentTopicObj(feature);
                                        setIsLingering(true);
                                    }}
                                    onMouseLeaveFunction={() => {
                                        // setCurrentTopicObj(null);
                                        setIsLingering(false);
                                    }}
                                    featureName={feature.featureName}
                                    // buttonText={feature.featureName}
                                    key={feature.featureName}
                                    iconFileName={feature.iconFileName}
                                />
                            ))}
                        </div>
                        <input
                            type="text"
                            id="outputField"
                            className="input-simple"
                            placeholder="Output"
                            name="outputField"
                            defaultValue=""
                        />
                    </div>
                </div>
                <IntroBox
                    isVisible={isIntroBoxVisible}
                    featureIconFileNameArray={allFeatures.map(
                        feature => feature.iconFileName
                    )}
                    closeIntroBox={() => setIsIntroBoxVisible(false)}
                />
                <FloatingHelpButton
                    onClickFunction={() => {
                        setDoesWantHelp(!doesWantHelp);
                        setIsIntroBoxVisible(!isIntroBoxVisible);
                    }}
                />
                <HelpNudgeBox
                    isVisible={isLingering && !doesWantHelp}
                    featureName={currentTopicObj?.featureName}
                    iconFileName={currentTopicObj?.iconFileName}
                />
                <HelpBox
                    isVisible={doesWantHelp}
                    featureName={currentTopicObj?.featureName}
                    iconFileName={currentTopicObj?.iconFileName}
                    helpDescription={currentTopicObj?.helpDescription}
                    helpDemoWebmFilename={currentTopicObj?.helpDemoWebmFilename}
                    helpURL={currentTopicObj?.helpURL}
                    closeHelpBox={() => setDoesWantHelp(false)}
                />
            </main>
        </div>
    );
}

export default App;
