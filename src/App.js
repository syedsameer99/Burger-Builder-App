import React,{Component}from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';
//import {Component} from 'react';

class App extends Component 
{
  constructor()
  {
  super();
    this.state={
     monsters:[],
     seachField:''
        }
    };
 
componentDidMount()
{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(Response=>Response.json())
  .then(users=>this.setState({monsters :users}));

}


render()
{


      const {monsters,seachField}=this.state;
      const filterMonsters=monsters.filter(monster=>
        monster.name.toLowerCase().includes(seachField.toLowerCase()) );



    return(
      
      


      <div className="App">
        <h1>Monsters</h1>
   <SearchBox
   placeholder='search monster'
   handleChange={e=>this.setState({seachField:e.target.value})}
   
   />
     <CardList monsters={filterMonsters}/>     
      

      </div>
    );
}
}
    
    
  


export default App;
