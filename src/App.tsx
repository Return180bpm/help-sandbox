import { useState, useEffect, useCallback } from "react";
import { Feature, initFeatures } from "./features";
import Workbench from "./Workbench";
import {
    HelpIntroBox,
    FloatingHelpButton,
    HelpNudgeBox,
    HelpMainBox,
} from "./HelpComponents";

// Creates an array containing objects.
// Each object represents a feature:
// class Feature {
//     constructor(
//         featureName,
//         featureFunction,
//         iconFileName,
//         helpDescription,
//         helpDemoWebmFilename
//     )
const allFeaturesArr = initFeatures();

function App() {
    // This state holds the feature that the user is currently hovering over (or was just hovering over).
    // This is used to give contextual help.
    // Gets passed to <HelpNudgeBox> and <HelpMainBox>
    const [currentTopicObj, setCurrentTopicObj] = useState<Feature>();

    // These 3 states toggle the visibility of the 3 help components: <HelpIntroBox>, <HelpNudgeBox>, and <HelpMainBox>
    const [doesWantHelp, setDoesWantHelp] = useState(false);
    const [isLingering, setIsLingering] = useState(false);
    const [isIntroBoxVisible, setIsIntroBoxVisible] = useState(true);

    // Logic for what happens when user starts/ends hovering over a "feature".
    // Gets passed to <Workbench> and inside there to each of the <FeatureButtons>.
    function handleMouseEnter(featureObj: Feature) {
        setIsIntroBoxVisible(false);
        setCurrentTopicObj(featureObj);
        setIsLingering(true);
    }
    function handleMouseLeave() {
        setIsLingering(false);
    }

    // Add hotkey functionality.
    // In this version, the hotkey in effect starts to work after the user first hovers over a feature, due to how currentTopicObj works.
    // After that, the hotkey always works, whether the user is currently hovering or not.
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

    // In this alternative version, the hotkeys only work while hovering over a featureObj.
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
                <a
                    href="https://github.com/Return180bpm/helper-sandbox"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        alt="Open this project on github"
                        src="icons/github.svg"
                        className="w-5 h-5"
                    />
                </a>
            </header>

            <main className="relative flex-grow flex justify-center items-start pt-12 ">
                {/* The main area where a user would perform some kind of work. This version is rudimental. */}
                <Workbench
                    {...{ allFeaturesArr, handleMouseEnter, handleMouseLeave }}
                />

                {/* Always visible help button. 
                Currently toggles the visibility of <IntroBox> */}
                <FloatingHelpButton
                    handleOnClick={() => {
                        // This hides the HelpBox and exposes the absurd logical conondrum I have got myself into
                        setDoesWantHelp(false);

                        setIsIntroBoxVisible(!isIntroBoxVisible);
                    }}
                />

                {/* Explains the basic idea of this app and gives a CTA. Opens when page first loads. */}
                <HelpIntroBox
                    isVisible={isIntroBoxVisible}
                    featureIconFileNameArray={allFeaturesArr.map(
                        featureObj => featureObj.iconFileName
                    )}
                    closeIntroBox={() => setIsIntroBoxVisible(false)}
                />

                {/* Appears after hovering over a feature in the <Workbench>. Asks if user wants help and shows hotkey to open <Helpbox> */}
                <HelpNudgeBox
                    isVisible={isLingering && !doesWantHelp}
                    featureName={currentTopicObj?.featureName}
                    iconFileName={currentTopicObj?.iconFileName}
                />

                {/* Explains and demonstrates how to use the feature that is, or was last, being hovered over (currentTopicObj). */}
                <HelpMainBox
                    isVisible={currentTopicObj && doesWantHelp}
                    close={() => setDoesWantHelp(false)}
                    featureName={currentTopicObj?.featureName}
                    iconFileName={currentTopicObj?.iconFileName}
                    helpDescription={currentTopicObj?.helpDescription}
                    helpDemoWebmFilename={currentTopicObj?.helpDemoWebmFilename}
                />
            </main>
        </div>
    );
}

export default App;
