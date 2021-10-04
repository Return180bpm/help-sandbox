/////////////////////////////////////////////////////////////////////
////        Define, create and export all features.               ///
//// (A feature is each of the 3 buttons inside the <Workbench>) ////
/////////////////////////////////////////////////////////////////////

//// Define the functions that make each feature do something. ////
const DEFAULT_STRING = "I'm all out of strings";

// "input" -> "╰(▔∀▔)╯input╰(▔∀▔)╯"
const _addDecoration = inputString => {
    const inputString_ = inputString || DEFAULT_STRING;
    const decoString = "╰(▔∀▔)╯";

    return `${decoString}${inputString_}${decoString}`;
};

// "input" -> "I N P U T"
const _makeAesthetic = inputString => {
    const inputString_ = inputString || DEFAULT_STRING;
    const aesthetic = " ";

    return inputString_.toUpperCase().split("").join(aesthetic);
};

// Silliness.
const _sacrifice = inputString => {
    const inputString_ = inputString ?? DEFAULT_STRING;
    const answerString = inputString_
        ? `Your ${inputString_.length} characters have been sacrificed. Thank You for your contribution`
        : "Please fill in the input box above";

    document.getElementById("inputField").value = "";

    return answerString;
};

// Define the class that each feature will belong to.
// Also, put every feature-object into the allFeaturesArr array so they're all in one place and can be easily exported, and later looped through when they're being rendered.
const allFeaturesArr = [];
class Feature {
    constructor(
        featureName,
        featureFunction,
        iconFileName,
        helpDescription,
        helpDemoWebmFilename
    ) {
        this.featureName = featureName;
        this.featureFunction = featureFunction;
        this.iconFileName = iconFileName;
        this.helpDescription = helpDescription;
        this.helpDemoWebmFilename = helpDemoWebmFilename;

        allFeaturesArr.push(this);
    }
}

// Create and export all the features in an array.
export default function initFeatures() {
    new Feature(
        "AddDecoration",
        _addDecoration,
        "fingerprint",
        "Add a decoration to the input text.",
        "helpAddDecoration.webm"
    );
    new Feature(
        "MakeAesthetic",
        _makeAesthetic,
        "columns",
        "Make the input text A E S T H E T I C.",
        "helpMakeAesthetic.webm"
    );
    new Feature(
        "Sacrifice",
        _sacrifice,
        "truck",
        "Sacrifice your input to an Elder God. The Elder God is randomly chosen. We use DHL for shipping.",
        "https://i.giphy.com/media/26BoCVdjSJOWT0Fpu/giphy.mp4"
    );

    return allFeaturesArr;
}
