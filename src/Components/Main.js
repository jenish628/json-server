import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import Intro from './Intro';
import Experience from './Experience';
import Add from './Add';
import Education from './Education';
import Addedu from './Addedu';


const Main = () => {
    return (
        <>
            <nav>
                
                   <ul>
                    
                       <li> <Link to={'/intro'}> INTRO </Link>
                       </li>
                    
                       <li>    <Link to={'/experience'}> EXPERIENCE </Link>
                       </li>
                    
                       <li>   <Link to={"/education"}> EDUCATION</Link>
                       </li>
                    </ul> 
                
            </nav>

            <Switch>
                
                <Route exact path="/intro" component={Intro} />
                <Route path="/experience" exact component={Experience} />
                <Route path="/add" exact component={Add} />
                <Route exact path="/education" component={Education} />
                <Route path="/addedu" exact component={Addedu} />
            </Switch>
        </>
    )
}
export default Main;



