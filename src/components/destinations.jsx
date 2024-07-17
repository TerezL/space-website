import {React, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import data from "../data.json"

function Destinations(){
  document.body.setAttribute('class', 'my-class-dest');
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];
    return(
        <>
            
                <section className="destination">
                <div className="boxheading">
                <h1 className="destmainheading"><span className="numb">01</span> pick your destination</h1>
                </div>
                <section className="destbox">
                  
                  <div className="destpic">
                  <img src={images.png} alt="planet"/>
                  </div>
                  <div className="desttext">
              {planets.map((planet, index) => {
                return (
                  <NavLink className="destmenu" key={index} onClick={() => setValue(index)}>
                    {planet.name}
                  </NavLink>
                );
              })}
            
            <h1 className="planetname">{name}</h1>
            <p className="planetdesc">
              {description}
            </p>
           <div className="destline"></div>
           <div className="avgbox">
           <div className="avggrid">
                <p className="avg">AVG. DISTANCE</p>
                <p className="amount">{distance}</p>
                </div>
                <div className="avggrid">
                <p className="avg">AVG. TRAVEL</p>
                <p className="amount">{travel}</p>
                </div>
                </div>
                </div>
                </section>
                  </section>
        </>
    )
}

export default Destinations;