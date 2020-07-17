import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    console.log(this.props.students);
    const studentListItem = this.props.students.map((item, index) => {
      return <li key={item.id}>{item.github_name}</li>;
    });

    return (
      <div>
        <ul>{studentListItem}</ul>;
      </div>
    );
  }
}

export default StudentList;
