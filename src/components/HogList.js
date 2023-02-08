import React from "react";
import HogItem from "./HogItem";


function HogList({ hogs }) {

    const hogTiles = hogs.map((hog) => {
       return ( 
        <div key={hog.name}>
            <HogItem hog={hog} />
        </div>
    )})

    return (
        <div>
         {hogTiles}
        </div>
    )
}

export default HogList