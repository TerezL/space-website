import React, { useState } from "react";
import data from "../data.json";
function Technology() {
    document.body.setAttribute('class', 'my-class-tech');
    const [tech] = useState(data.technology);
    const [value, setValue] = useState(0);
    const {name, images, description} = tech[value];
    return(
        <>
            <section className="technology">
            <div className="boxheading">
                <h1 className="destmainheading"><span className="numb">03</span> space launch 101</h1>
                </div>
                <section className="techbox">
                <div className="buttons" >
                {tech.map((tech, index) => {
                    return(
                        <button className="round" key={index} onClick={() => setValue(index)}>{index + 1}</button>
                    )
                    })}
                    </div>
                    <div className="tboxtext">
                    <h2 className="role">the terminology... </h2>
                    <h1 className="name">{name}</h1>
                    <p className="bio">{description}</p>
                    </div>
                    <picture>
                    <source media="(max-width: 600px)" srcSet={images.portrait} />
                    <source media="(max-width: 1000px)" srcSet={images.landscape} />
                    <source media="(min-width: 1100px)" srcSet={images.portrait} />
                    <img src={images.portrait} alt="pics" className="picture"/>
                    </picture>
                    
                    
                    </section>
            </section>
        </>
    )
}

export default Technology;