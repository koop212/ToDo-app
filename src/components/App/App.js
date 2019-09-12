import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import TasksTable from '../Table/Table';
import InputTask from '../InputTask/InputTask'

class App extends Component {
  render() {
    return(
      <div>
        <div>
          <InputTask />
        </div>
        <div>
          <TasksTable />
        </div>
      </div>
    )
  }
}

export default App;
