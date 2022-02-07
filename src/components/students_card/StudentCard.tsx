import React from "react";
import "./student.style.scss";

const StudentCard = ({ studentList = [] }) => {
  return (
    <>
      {studentList.map(({ id, name, email, address }) => {
        const { street, city, zipcode } = address;
        return (
          <div className="student-card" key={id}>
            <h2>
              <img src="student.jpg" alt="student" />
            </h2>
            <h2>{id}</h2>
            <h4>{name}</h4>
            <h4>{email}</h4>

            <div className="address-item">
              <span>Street -({street})</span>
              <span>, City -{city}</span>
              <span>, Zipcode -{zipcode}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StudentCard;
