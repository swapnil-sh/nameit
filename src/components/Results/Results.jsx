import React from "react";
import NameCard from "../NameCard/NameCard";
import './Results.css'

const Results = ({ suggestedNames }) => {

    const suggestedNamesJsx = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return (
        <div className="results-container">
            <p>{suggestedNamesJsx}</p>
        </div>
    );
};

export default Results;