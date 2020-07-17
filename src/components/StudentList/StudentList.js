import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    console.log(this.props.students);
    const studentListItem = this.props.students.map((item, index) => {
      return (
        <tr>
          <td key={item.id}>{item.github_name}</td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <tr>
            <th>Github Username</th>
          </tr>
          {studentListItem}
        </table>
      </div>
    );
  }
}

export default StudentList;
