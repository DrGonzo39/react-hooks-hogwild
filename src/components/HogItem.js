import React, {useState} from "react";

function HogItem({ hog }) {
    const [moreInfo, setMoreInfo] = useState(false)

    function handleTileClick() {
        setMoreInfo(!moreInfo)
    } 
    return(
        <div onClick={handleTileClick} className="pigTile" key={hog.specialty}>
            <h1>{hog.name}</h1>
            <img alt="piggy_pic"src={hog.image} />
            {moreInfo ? <div>{hog.specialty} {hog.weight}</div> : null}
        </div>
    )
}

export default HogItem;