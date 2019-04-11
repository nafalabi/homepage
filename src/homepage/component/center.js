import React, { Component } from 'react'
import moment from 'moment';
import me from './../config/me.json'

export default class greeting extends Component {
  render() {
    let curHour = new moment().format('HH');
    let timeRange = [
      { start: 0, end: 5, value: "Night" },
      { start: 6, end: 11, value: "Morning" },
      { start: 12, end: 12, value: "Noon" },
      { start: 13, end: 16, value: "Afternoon" },
      { start: 17, end: 19, value: "Evening" },
      { start: 20, end: 24, value: "Night" },
    ];
    let greetingVal = '';
    timeRange.forEach((item, i) => {
      if ((timeRange[i].start <= parseInt(curHour)) && (parseInt(curHour) <= timeRange[i].end)) {
        greetingVal = item.value;
      }
    });


    return (
      <div className="center-component">
        <div className="greeting">
          <h1>Good {greetingVal}, {me.firstName}</h1>
          <h3>What is your main focus today?</h3>
        </div>
      </div>
    )
  }
}
