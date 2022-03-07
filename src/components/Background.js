import React, { useState } from "react";
import "./background.css"

const Background = () => {

    const [isDay, setDay] = useState(true)

    const dayChange = () => setDay(!isDay)


    return (
        <>  <div className={isDay ? "day" : "night"}>
            <h1>Es ist {isDay ? "Tag" : "Nacht"}</h1>
            <button onClick={dayChange}>Wechsel zu {isDay ? "Nacht" : "Tag"}</button>
        </div>
        </>
    )


}


export default Background