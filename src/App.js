import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddToDo from './components/layout/AddTodo';
import About from './components/pages/About';
import {v4 as uuidv4} from 'uuid';

class App extends Component{
  state={
    todos: [
      {
        id:uuidv4(),
        title:'Take out the trash',
        completed:false
      },
      {
        id:uuidv4(),
        title:'Dinner with wife',
        completed:false
      },
      {
        id:uuidv4(),
        title:'Meeting with boss',
        completed:false
      }
    ]
  }

  //Toggle Complete
  markComplete= (id)=>{
    //To change the state of the particular id we are using setstate()
    this.setState({todos:this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed= !todo.completed
      }
      return todo;
    })});
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }

//Add ToDo
  addTodo = (title) =>{
    const newTodo = {
      id:uuidv4(),
      title, // this is same as title:title,
      completed:false
    }
    this.setState({todos : [...this.state.todos,newTodo]});
  }
  render(){
    return (
      <Router>
        <div className="App">
          <div className = "container">
            <Header />
            <Route exact path = "/" render = {props =>(
              <>
                <AddToDo addTodo = {this.addTodo} />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo} />
              </>
            )} />
            <Route path = "/about" component = {About} />
            
          </div>
        </div>
      </Router>
  );
  }
}

export default App;
