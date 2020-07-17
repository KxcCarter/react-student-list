import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';

class App extends Component {
  state = {
    studentList: [],
  };

  componentDidMount() {
    console.log('READY');
    this.getData();
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here

    axios({
      method: 'POST',
      url: '/students',
      data: newStudent,
    })
      .then((response) => {
        this.getData();
      })
      .catch((err) => {
        console.log('POST ERROR!', err);
      });
  };

  getData() {
    axios({
      method: 'GET',
      url: '/students',
    })
      .then((response) => {
        this.setState({
          studentList: response.data,
        });
      })
      .catch((error) => {
        console.log('ERROR!:', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br />
        <StudentForm addStudent={this.addStudent} />

        <p>Student list goes here.</p>
        <StudentList students={this.state.studentList} />
      </div>
    );
  }
}

export default App;
