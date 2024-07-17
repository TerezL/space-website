import React, { useState } from "react";
import data from "../data.json";

function Crew(){
    document.body.setAttribute('class', 'my-class-crew');
    const [crew] = useState(data.crew);
    const [value, setValue] = useState(0);

    const {name, images, role, bio} = crew[value];
    return(
        <>
        <section className="crew">
        <div className="boxheading">
                <h1 className="destmainheading"><span className="numb">02</span> meet your crew</h1>
                </div>
                <section className="crewbox">
                
                <div className="cboxtext">
                    <h2 className="role">{role}</h2>
                    <h1 className="name">{name}</h1>
                    <p className="bio">{bio}</p>
                    
                    {crew.map((crew, index) => {
                    return(
                        
                        <button className="dots" key={index} onClick={() => setValue(index)}></button>
                  
                    )
                    })}
                    </div>
                <div className="crewpic">
                    <img src={images.png} alt="crewpics" />
                </div>
                
                </section>
                </section>
        </>
    )
}

export default Crew;