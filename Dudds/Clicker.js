
// import React, {Component} from 'react';
// import PropTypes from 'prop-types'

// const A = 'Holiday';
// //this component uses a method that is passed into as a onClick event
// class Clicker extends Component{
// constructor(props){
//   super(props);
//   this.state = {
//     justClicked: null,
//     isVisible: false,
//     date: new Date(),
//     // Array length defined as 10, const 
//     letters: Array.from({length: 10}, ( _,i )=> (i+" "+ A))
//   };
// }

// //use setInterval in lifecyle method
// componentDidMount(){
//     setInterval(()=> this.tick(), 3000);
//     console.log('Comp,will,mount');
// }
// tick(){
//     this.setState({
//         date:new Date()
//     })
// }
//    handleClick=(letter)=>{
//   this.setState({ justClicked: letter
//   })
//    console.log('Click happened', new Date());
//  };

 

   
       


// // setInterval(visibility,2000);


//  render(){
  
//   return <React.Fragment>
//       <div>
//           {this.state.date.toLocaleTimeString()}
//         {this.state.isVisible ? <h3>
//             {this.props.n1} + {this.props.n2} == {this.props.n1 + this.props.n2}
//           </h3> : <h3>No Good</h3>}
//         <label style={{ backgroundColor: "yellow", color: "black" }}>
//           Just clicked = {this.state.justClicked} .....
//         </label>
//         <ul>
//           {this.state.letters.map(letter => <li key={letter}>{letter}</li>)}
//         </ul>
//         {/* binding in render */}
//         <button onClick={this.handleClick.bind(this)}>Date</button>
//         {/* arrow function that doesnt require binding(experimental)//creates a new function each time component renders */}
//         <button onClick={() => this.handleClick}>Date</button>;
//       </div>
//     </React.Fragment>;
// }
// }

//         Clicker.propTypes ={

//   n1: PropTypes.number,
//   n2: PropTypes.number
// }

// export default Clicker;

