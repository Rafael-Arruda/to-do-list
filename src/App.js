import React, {Component} from "react";

import './App.css';

import Header from './components/Header'
import ToDoList from './components/ToDoList';


export default class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <ToDoList/>
      </div>
    )
  }
}