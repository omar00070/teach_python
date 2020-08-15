import React from "react";

const Grades = (props) => {
  const getAverage = () => {
    let sum = 0;
    props.gradedASSTs.forEach((asst, i) => {
      sum += asst.grade;
    });
    const avg = sum / props.gradedASSTs.length;
    return Math.floor(avg);
  };

  const average = getAverage();
  return (
    <ul className="grades-table list-card">
      <div className="grades-row main-row">
        <h4>#</h4>
        <h4 className="title">Assigntment</h4>
        <h4>Grade </h4>
      </div>
      {props.gradedASSTs.map((asst, n) => {
        return (
          <div
            key={asst.id}
            className={n % 2 === 0 ? "grades-row" : "grades-row alter-row"}
          >
            <p>{n + 1}</p>
            <li>{asst.assignment}</li>
            <p className="grade">{asst.grade}</p>
          </div>
        );
      })}
      <div className="last-row grades-row">
        <h4 className="average">Average</h4>
        <h4>{average}</h4>
      </div>
    </ul>
  );
};

export default Grades;
