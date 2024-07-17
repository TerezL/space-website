import React from "react";

import { Outlet } from "react-router-dom";

function Home(){
  document.body.setAttribute('class', 'my-class-home');
    return(
        <>


<section className="main">
<section className="text">
<div className="words">
         <h2 className="subheading">So, you want to travel to</h2>
  <h1 className="heading">Space</h1>
  <p className="hometext">
  Let's face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we'll give you a truly out of this world experience!
</p>
</div>
<div className="explore">
  <a className="exphead" href='/destinations'>Explore</a>
  </div>
  </section>
</section>
<Outlet /> 
        </>
    )
}

export default Home;