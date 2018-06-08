import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import Course from './Course';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }
  componentDidMount() {
    const coursesUrl = `http://www.mocky.io/v2/5af340293400004f00770458`;
    fetch(coursesUrl)
      .then(res => res.json())
      .then(res =>  {
        let resArr = res.courses;
        let classCount = 0;
        let practiceCount = 0;

        const courseArr = [];

        resArr.map(course => { // get only two classes and exams
          if (course.type === "Class" && classCount < 2) {
            classCount++;
            courseArr.push(course);
            console.log(courseArr);
          } else if (course.type === "Practice Exam" && practiceCount < 2) {
            practiceCount++;
            courseArr.push(course);
            console.log(courseArr);
          }
          return;
        })

        this.setState({
          courses: courseArr
        })
      });
  }
  componentDidUpdate(){
    console.log(this.state); // is state updating?
  }
  render() {
    const {courses} = this.state;
    let courseList = courses.map(course => {
        return ( // create Component and pass props
          <Course
            key={course.id}
            title={course.title}
            type={course.type}
            startsAt={course.startsAt}
            enrollUrl={course.enrollUrl}/>
          )
    })
    return (
      <div className="App container">
        {courseList}
      </div>
    );
  }
}

export default App;
