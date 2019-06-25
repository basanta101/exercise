import React, { Component } from "react";
import axios from "axios";
import './styles.css'
import Display from "./Display";
import { Link } from 'react-router-dom'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      themeData: [],
       display: null
    };
  }

  componentDidMount() {
    axios
      .get("https://newprod.zypher.co/admin/themes/getAllThemes")
      .then(res =>{
        //console.log(res.data.themes);
        this.setState({
          themeData: res.data.themes
        })
      })
      .catch(err => {console.log(err)})
  }
    
  handleEvent=(themeName)=>{
    //console.log(e.target);
    console.log(themeName);
    
    

  }

  render() {
    
   //console.log("state from papa",this.state.themeData);

    return (
      <div>
       {/* <button><Link to='/themeDataDisplay'>click here</Link> </button>  */}
       <Display
         data={this.state.themeData}
         handleEvent={this.handleEvent}
       />
       
      </div>
      
    );
  }
}

export default App;



// <div>
//         <div className="Name">
//           <div>#</div>
//         <div className="Namec2">Name</div>
//         </div>
//         {this.state.themeName.map((item,index) =>{
//           return <div key={index} className="list">
//             <div className="index">{index+1}</div>
//             <div className="item">{item}</div>   
//           </div>
//         })
//         }
//       </div>