import React, { Component } from 'react';
import styles from '../StudentList/StudentList.module.css';

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
      <div className={styles.listContainer}>
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
