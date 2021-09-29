import { HelpBox } from "./HelpBox.js";
import "./App.css";
import { useState, useEffect } from "react";

const ControlButton = ({
    onClickFunction,
    onHoverFunction,
    featureName,
    buttonText,
    iconClassKey,
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
            className={`icon-${iconClassKey} w-8 h-8`}
        >
            {/* {buttonText} */}
        </button>
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
    constructor(name, featureFunction, iconClassKey, helpDescription, helpURL) {
        this.name = name;
        this.featureFunction = featureFunction;
        this.helpDescription = helpDescription;
        this.helpURL = helpURL;
        this.iconClassKey = iconClassKey;
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
    "Donates the input text to an Elder God.",
    "https://foo.bar"
);

function App() {
    const [currentTopicObj, setCurrentTopicObj] = useState({});
    useEffect(() => {
        console.log(currentTopicObj);
    }, [currentTopicObj]);

    return (
        <div
            id="container"
            className="w-6/12 h-full mx-auto p-6 flex flex-col border-2 border-red-500"
        >
            <header id="bannerAlt" className="flex flex-col gap-2">
                <h1 className="whitespace-pre-wrap ">Helper {"\n"}Sandbox</h1>
                <hr className="w-full h-1 bg-black" />
                <span className="icon-github w-5 h-5"></span>
            </header>

            <main className="flex-grow flex justify-center items-start pt-12 border-2 border-gray-600">
                <div
                    id="workbench"
                    className="w-72 flex flex-col justify-start items-center border-2 border-black shadow-sm rounded-lg overflow-hidden"
                >
                    <div
                        id="workbench-header"
                        className="w-full flex justify-center bg-pink-600 pt-4 pb-2"
                    >
                        <h4 className="text-white">Workbench</h4>
                    </div>
                    <div
                        id="workbench-body"
                        className="w-full flex flex-col gap-8 justify-center p-12"
                    >
                        <input
                            type="text"
                            id="inputField"
                            className="input-simple"
                            placeholder="Input"
                            name="inputField"
                            defaultValue=""
                        />
                        <div
                            id="button-container"
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
                                    iconClassKey={feature.iconClassKey}
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

                {/* <HelpBox
                    name={currentTopicObj.name}
                    helpDescription={currentTopicObj.helpDescription}
                    helpURL={currentTopicObj.helpURL}
                /> */}
            </main>
        </div>
    );
}

export default App;
