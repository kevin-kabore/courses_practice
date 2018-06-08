import React, { Component} from 'react';

import './Course.css';

class Course extends Component {
  constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this);
  }
  formatDate(string){ //method to format date string
    let date = new Date(string); // get as type date
    date = date
      .toLocaleString('en-us') // to us formatted string
      .split(',')[0]
      .split('/')
      .join('.'); // type:String MM.DD.YYYY
    return date;
  }
  render() {
    const {type, title, startsAt, enrollUrl} = this.props;
    let titleArr = title.split(' '); // for view display see line 33;
    let date = this.formatDate(startsAt);

    return (
      <div className={"course-component " + (type === 'Class' ? 'class' : 'exam')}>
        {
          type === 'Class' ? // Class or Exam ?
            [ // Class
              <div key={1} className="course-description">
                <span className="test-name">{titleArr[0]}</span><br />
                <span className="course-location">{titleArr[1]}</span><br />
                <span className="class-label">{titleArr[2]}</span><br />
                <span className="class-date">Starting: {date}</span>
              </div>,
              <a key={2} className="button classBtn" href={`${enrollUrl}`}>Learn More</a>
            ]
              :
            [ // Exam
              <div key={3} className="course-description">
                <span className="test-name">{titleArr[0]}</span><br />
                <span className="course-location">ON-CAMPUS</span><br />
                {titleArr[1]}<br />
                {titleArr[2]}<br />
                 {date}
              </div>,
              <a key={4} className="button examBtn" href={`${enrollUrl}`}>Learn More</a>
            ]
        }
      </div>
    )
  }
}
export default Course;
