import React from "react";

//////////////////////////////////////////////////////////////////////////////////
//// <Workbench> is the main area where a user would perform some kind of work ///
//////////////////////////////////////////////////////////////////////////////////

// Buttons in the <Workbench>
// Their icons are intentionally a little obscure, as a way to simulate an app with novel features.
const FeatureButton = ({
    onClickFunction,
    onMouseEnterFunction,
    onMouseLeaveFunction,
    featureName,
    iconFileName,
}) => {
    const handleOnClick = () => {
        // Get the string that's in the input field
        const inputString = document.getElementById("inputField").value;

        // Apply a transforming function to the input
        const outputString = onClickFunction(inputString);

        // Put outputString where it belongs
        document.getElementById("outputField").value = outputString;
    };

    return (
        <button
            onClick={() => handleOnClick()}
            onMouseEnter={() => onMouseEnterFunction()}
            onMouseLeave={() => onMouseLeaveFunction()}
            id={featureName}
            className="w-8 h-8"
        >
            <img
                src={`icons/${iconFileName}.svg`}
                alt={`${featureName}`}
                className="w-full h-full"
            />
        </button>
    );
};

// The <Workbench> stands for the main area where the user would interact and do most of their work in a real app.
export default function Workbench({
    allFeaturesArr,
    handleMouseEnter,
    handleMouseLeave,
}) {
    return (
        <div id="workbench" className="section-box w-96 rounded-lg shadow-sm">
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
                    {allFeaturesArr.map(featureObj => (
                        <FeatureButton
                            onClickFunction={featureObj.featureFunction}
                            onMouseEnterFunction={() => {
                                handleMouseEnter(featureObj);
                            }}
                            onMouseLeaveFunction={() => {
                                handleMouseLeave();
                            }}
                            featureName={featureObj.featureName}
                            key={featureObj.featureName}
                            iconFileName={featureObj.iconFileName}
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
    );
}
