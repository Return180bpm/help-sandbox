import { HelpBox } from "./HelpBox.js";
import "./App.css";
import { useState, useEffect } from "react";

const ControlButton = ({
    onClickFunction,
    onHoverFunction,
    featureName,
    buttonText,
    iconFileName,
}) => {
    const handleOnClick = () => {
        // Get the string that's in the input field

        const inputString =
            document.getElementById("inputField").value ||
            "I'm all out of strings";
        let outputString = "";

        // Apply the transformotion to the input
        outputString = onClickFunction(inputString);

        inputString === "xXx" &&
            document
                .querySelector("main")
                .append("Winner winner chicken dinner");

        // Put the outputString where it belongs
        document.getElementById("outputField").value = outputString;
    };

    return (
        <button
            onClick={() => handleOnClick()}
            onMouseEnter={() => onHoverFunction()}
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
// Define Functions for features
const addDecoration = inputString => {
    let outputString = "";
    let decoString = "xXx";

    outputString = `${decoString} ${inputString} ${decoString}`;

    return outputString;
};

// Abstracts features so everything is in one place
const allFeatures = [];
class Feature {
    constructor(name, featureFunction, iconFileName, helpDescription, helpURL) {
        this.name = name;
        this.featureFunction = featureFunction;
        this.helpDescription = helpDescription;
        this.helpURL = helpURL;
        this.iconFileName = iconFileName;
        allFeatures.push(this);
    }
}

// Each object represents a feature
const aflefle = new Feature(
    "Afléflé",
    addDecoration,
    "fingerprint",
    "Add a decororation to the input text.",
    "https://foo.bar"
);
const flinkeru = new Feature(
    "Flinkeru",
    addDecoration,
    "columns",
    "Stretches the input text.",
    "https://foo.bar"
);
const gib = new Feature(
    "Gib",
    addDecoration,
    "truck",
    "Sacrifices your input to an Elder God. The Elder God is randomly chosen. We use DHL for shipping.",
    "https://foo.bar"
);

function App() {
    const [currentTopicObj, setCurrentTopicObj] = useState({});
    // useEffect(() => {
    //     console.log(currentTopicObj);
    // }, [currentTopicObj]);

    return (
        <div
            id="container"
            className="w-6/12 h-full mx-auto p-6 flex flex-col border-2 border-red-500"
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

            <main className="relative flex-grow flex justify-center items-start pt-12 border-2 border-gray-600">
                <div
                    id="workbench"
                    className="section-box rounded-lg shadow-sm"
                >
                    <div
                        id="workbenchTitleBar"
                        className="title-bar bg-pink-600 text-white"
                    >
                        <h4>Workbench</h4>
                    </div>
                    <div id="workbenchBody" className="section-box-body">
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
                                    onHoverFunction={() =>
                                        setCurrentTopicObj(feature)
                                    }
                                    featureName={feature.name}
                                    buttonText={feature.name}
                                    key={feature.name}
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

                <FloatingHelpButton />
                <HelpBox
                    name={currentTopicObj.name}
                    iconFileName={currentTopicObj.iconFileName}
                    helpDescription={currentTopicObj.helpDescription}
                    helpURL={currentTopicObj.helpURL}
                />
            </main>
        </div>
    );
}

export default App;
