import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeData: null
    };
  }

  static getDerivedStateFromProps(props) {
    console.log("props now", props);
    return {
      themeData: props.data
    };
  }
  render() {
    //console.log("state now", this.state.themeData)
    return (
      <div>
        <div className="name">
          <div>#</div>
          <div className="namec2"> Name</div>
        </div>
        <div>
          {this.state.themeData.length &&
            this.state.themeData.map((item, index) => {
              return (
                <div key={index} className="list">
                  <div className="index">{index + 1}</div>
                  <div
                    className="item"
                    onClick={() => {
                      this.props.handleEvent(item.themeName);
                    }}
                  ><Link to='/themeDataDisplay'>{item.themeName}</Link>
                    
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Display;
// {this.props.length &&
//     this.props.data.map((item, index) => {
//       return (
//         <div className="list" key={index} onClick={this.handleEvent}>
//           <div className="index">{index + 1}</div>
//           <div className="item">{item.themeName}</div>
//         </div>
//       );
//     })}

// <div>
//         <div className="name">
//           <div>#</div>
//           <div className="namec2"> Name</div>
//         </div>
//         <div>
//         {this.state.themeData.length && this.state.themeData.map((item,index)=>{
//             return (<div key={index} className="list">
//                 <div className="index">{index + 1}</div>
//                 <div className="item" value={item.themeName} onClick={this.props.handleEvent}>{item.themeName}</div>
//             </div>)
//         })}
//         </div>
//       </div>

// {this.state.themeData.length && this.state.themeData.map((item,index)=>{
//   return (<div key={index} className="list">
//       <div className="index">{index + 1}</div>
//       <div className="item" ><input readOnly onClick={this.props.handleEvent}
//       value={item.themeName}/></div>
//   </div>)
// })}
