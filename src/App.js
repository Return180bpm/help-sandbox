import { HelpBox } from "./HelpBox.js";
import "./App.css";
import { useState, useEffect } from "react";

const ControlButton = ({
    onClickFunction,
    onHoverFunction,
    featureName,
    buttonText,
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
            className="p-4 bg-gray-900 text-white"
        >
            {buttonText}
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
    constructor(name, featureFunction, helpDescription, helpURL) {
        this.name = name;
        this.featureFunction = featureFunction;
        this.helpDescription = helpDescription;
        this.helpURL = helpURL;
        allFeatures.push(this);
    }
}

// Each object represents a feature
const aflefle = new Feature(
    "Afléflé",
    addDecoration,
    "Add a decororation to the input text.",
    "https://foo.bar"
);
const flinkeru = new Feature(
    "Flinkeru",
    addDecoration,
    "Stretches the input text.",
    "https://foo.bar"
);
const gib = new Feature(
    "Gib",
    addDecoration,
    "Donates the input text to an Elder God.",
    "https://foo.bar"
);

function App() {
    const [currentTopicObj, setCurrentTopicObj] = useState({});
    useEffect(() => {
        console.log(currentTopicObj);
    }, [currentTopicObj]);

    return (
        <div className="App w-screen">
            <div
                id="container"
                className="container min-h-screen mx-auto px-6 flex-1"
            >
                <div
                    id="bannerAlt"
                    className="hidden w-full flex justify-evenly pt-4 pb-1 border-b-8  border-yellow-300"
                >
                    {/* <p className="text-xl my-8">Confusion -> Clarity</p> */}
                    <span className="text-3xl">Confusion</span>
                    <span className="text-3xl">-></span>
                    <span className="text-3xl">Clarity</span>
                </div>
                <div id="banner" className="w-full bg-purple-100 p-8 hidden">
                    <p className="text-2xl font-bold mb-4">Hey remnote!</p>
                    <p id="info-text" className="text-base">
                        I made this to learn Tailwind.
                    </p>
                    {/* TODO: insert link to readme */}
                    <p id="cta" className="text-base">
                        Read about how it went for me
                        <a href="github#####.myreadme" className="underline">
                            {" "}
                            here
                        </a>
                    </p>
                </div>
                <main className="w-full min-h-screen  py-8 px-4 flex justify-start items-center border-0 border-black">
                    <div
                        id="controls"
                        className="w-96 h-96 p-8 flex flex-col justify-evenly items-baseline border-2 border-black"
                    >
                        <input
                            type="text"
                            id="inputField"
                            className="max-h-12 w-full text-xl border-2 border-grey-500 p-4 pb-0"
                            placeholder="input"
                            name="inputField"
                            defaultValue=""
                        />
                        <div
                            id="buttonContainer"
                            className="flex w-full justify-between"
                        >
                            {allFeatures.map((feature, index) => (
                                <ControlButton
                                    onClickFunction={feature.featureFunction}
                                    featureName={feature.name}
                                    buttonText={feature.name}
                                    key={feature.name}
                                    onHoverFunction={() =>
                                        setCurrentTopicObj(feature)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <input
                        type="text"
                        id="outputField"
                        className="max-h-12 w-96 text-2xl border-b-8 border-pink-500 p-4 ob-0"
                        placeholder="output"
                        name="outputField"
                        defaultValue=""
                    />
                    <HelpBox
                        name={currentTopicObj.name}
                        helpDescription={currentTopicObj.helpDescription}
                        helpURL={currentTopicObj.helpURL}
                    />
                </main>
            </div>
        </div>
    );
}

export default App;
