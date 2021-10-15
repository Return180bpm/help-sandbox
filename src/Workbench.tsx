import React from "react";
import { Feature } from "features";

//////////////////////////////////////////////////////////////////////////////////
//// <Workbench> is the main area where a user would perform some kind of work ///
//////////////////////////////////////////////////////////////////////////////////

type FeatureButtonProps = {
    featureFunction: (inputString: string) => string;
    handleMouseEnter: React.MouseEventHandler<HTMLButtonElement>;
    handleMouseLeave: React.MouseEventHandler<HTMLButtonElement>;
    featureName: string;
    iconFileName: string;
};
// Buttons in the <Workbench>
// Their icons are intentionally a little obscure, as a way to simulate an app with novel features.
const FeatureButton = ({
    featureFunction,
    handleMouseEnter,
    handleMouseLeave,
    featureName,
    iconFileName,
}: FeatureButtonProps) => {
    const handleOnClick = () => {
        // Get the string that's in the input field
        const inputField = document.getElementById(
            "inputField"
        ) as HTMLInputElement;
        const inputString = inputField.value;

        // Apply a transforming function to the input
        const outputString = featureFunction(inputString);

        // Put outputString where it belongs
        const outputField = document.getElementById(
            "outputField"
        ) as HTMLInputElement;
        outputField.value = outputString;
    };

    return (
        <button
            onClick={() => handleOnClick()}
            onMouseEnter={e => handleMouseEnter(e)}
            onMouseLeave={e => handleMouseLeave(e)}
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

type WorkbenchProps = {
    allFeaturesArr: Feature[];
    handleMouseEnter: (featureObj: Feature) => void;
    handleMouseLeave: () => void;
};

// The <Workbench> stands for the main area where the user would interact and do most of their work in a real app.
export default function Workbench({
    allFeaturesArr,
    handleMouseEnter,
    handleMouseLeave,
}: WorkbenchProps) {
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
                    {allFeaturesArr.map(featureObj => {
                        // console.log(
                        //     "featureObj.featureName: " + featureObj.featureName
                        // );
                        return (
                            <FeatureButton
                                featureFunction={featureObj.featureFunction}
                                handleMouseEnter={e => {
                                    handleMouseEnter(featureObj);
                                }}
                                handleMouseLeave={() => {
                                    handleMouseLeave();
                                }}
                                featureName={featureObj.featureName}
                                key={featureObj.featureName}
                                iconFileName={featureObj.iconFileName}
                            />
                        );
                    })}
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
