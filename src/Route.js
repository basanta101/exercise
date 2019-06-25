import React, {Component} from 'react';
import { BrowserRouter} from 'react-router-dom';
import Switches from './Switches'
class Path extends Component {
    render(){
     return(
         <BrowserRouter>
           <Switches/>
         </BrowserRouter>
     )
    }
}

export default Path;