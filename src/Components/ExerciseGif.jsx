import React from "react";

const ExerciseGif = ({ exerciseId }) => {
    const apiKey = "c904c93ed8msh4794354027c0195p1f7bfbjsnd4e14358af4f";
    const resolution = 180;

    const imageUrl = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exerciseId}&resolution=${resolution}&rapidapi-key=${apiKey}`;

    return (
        <img
            className="detail-image"
            loading="lazy"
            src={imageUrl}
            alt="Exercise animation"
            width={resolution}
            style={{ borderRadius: "8px" }}
        />
    );
};

export default ExerciseGif;
