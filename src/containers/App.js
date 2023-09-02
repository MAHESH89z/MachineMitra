import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './roborts';
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'


class App extends Component {
  constructor(){
    super()
     this.state = {
    Robots: [] ,
    Searchfield:''
     }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce=> responce.json())
    .then(users=>this.setState({Robots:users}))
      // this.setState({Robots:robots})
  }

  onSearchChange = (event) => {
      this.setState({Searchfield: event.target.value})
  }


  render(){
    const {Robots , Searchfield} = this.state;
    const filteredRobots = Robots.filter(robot=>{
        return robot.name.toLowerCase().includes(Searchfield.toLowerCase())
    })

   return !Robots.length ?
        <h1>Loading......</h1> : (
      <div className='tc'>
      <h1 className='f1'>MachineMitra</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
       <CardList robots={filteredRobots} /> 
      </Scroll>
      </div>);
    }
  }


// const App = () =>{
//   return (
//     <div className='tc'>
//     <h1>MachineMitra</h1>
//     <SearchBox />
//     <CardList robots={robots} /> 
//     </div>
//   )
// }



// const App =()=> {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//  }
export default App;
