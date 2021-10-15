/////////////////////////////////////////////////////////////////////
////        Define, create and export all features.               ///
//// (A feature is each of the 3 buttons inside the <Workbench>) ////
/////////////////////////////////////////////////////////////////////

//// Define the functions that make each feature do something. ////
const DEFAULT_STRING = "I'm all out of strings";

// "input" -> "╰(▔∀▔)╯input╰(▔∀▔)╯"
function _addDecoration(inputString: string): string {
    const inputString_ = inputString || DEFAULT_STRING;
    const decoString = "╰(▔∀▔)╯";

    return `${decoString}${inputString_}${decoString}`;
}

// "input" -> "I N P U T"
function _makeAesthetic(inputString: string): string {
    const inputString_ = inputString || DEFAULT_STRING;
    const aesthetic = " ";

    return inputString_.toUpperCase().split("").join(aesthetic);
}

// Silliness.
function _sacrifice(inputString: string): string {
    const inputString_ = inputString ?? DEFAULT_STRING;
    const answerString = inputString_
        ? `Your ${inputString_.length} characters have been sacrificed. Thank You for your contribution`
        : "Please fill in the input box above";

    const inputField = document.getElementById(
        "inputField"
    ) as HTMLInputElement;
    inputField.value = "";

    return answerString;
}

// Define the class that each feature will belong to.
// Also, put every feature-object into the allFeaturesArr array so they're all in one place and can be easily exported, and later looped through when they're being rendered.
export interface Feature {
    featureName: string;
    featureFunction(inputString: string): string;
    iconFileName: string;
    helpDescription: string;
    helpDemoWebmFilename: string;
}
const allFeaturesArr: Feature[] = [];

// Create and export all the features in an array.
export function initFeatures() {
    const addDecoration: Feature = {
        featureName: "AddDecoration",
        featureFunction: _addDecoration,
        iconFileName: "fingerprint",
        helpDescription: "Add a decoration to the input text.",
        helpDemoWebmFilename: "helpAddDecoration.webm",
    };

    const makeAesthetic: Feature = {
        featureName: "MakeAesthetic",
        featureFunction: _makeAesthetic,
        iconFileName: "columns",
        helpDescription: "Make the input text A E S T H E T I C.",
        helpDemoWebmFilename: "helpMakeAesthetic.webm",
    };
    const sacrifice: Feature = {
        featureName: "Sacrifice",
        featureFunction: _sacrifice,
        iconFileName: "truck",
        helpDescription:
            "Sacrifice your input to an Elder God. The Elder God is randomly chosen. We use DHL for shipping.",
        helpDemoWebmFilename:
            "https://i.giphy.com/media/26BoCVdjSJOWT0Fpu/giphy.mp4",
    };

    allFeaturesArr.push(addDecoration, makeAesthetic, sacrifice);

    return allFeaturesArr;
}
