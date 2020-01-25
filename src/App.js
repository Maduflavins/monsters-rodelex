import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFiled: ''
    }

  
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  } 

  handleChange=(e)=>{
    this.setState({searchFiled: e.target.value})
  }

  render(){
    const { monsters, searchFiled } = this.state;
    const filteredMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase()))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
         { <input type='search' placeholder='search for monsters' onChange={e=>this.setState({searchFiled:e.target.value})} />}
        <CardList monsters={filteredMonster} /> 

        <SearchBox>
          placeholder='search monsters'
          handleChange={this.handleChange}
        </SearchBox>
        
     
    </div>

    );
  }
}

export default App;
