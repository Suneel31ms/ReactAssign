import React, { useState, useEffect } from "react";
import SearchBar from "../searchbox/SearchBar";
import StudentCard from "../students_card/StudentCard";

import "./directory.style.scss";

const StudentDirectory = () => {
  const [searchfield, setsearchfield] = useState("");
  const [studentListDefault, setstudentListDefault]: any = useState();
  const [studentList, setStudentList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      return await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setStudentList(data);
          setstudentListDefault(data);
        });
    };
    fetchData();
  }, []);

  const updatesearchfield = async (searchfield: any) => {
    const filtered: any = studentListDefault.filter((student: any) => {
      return student.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    setsearchfield(searchfield);
    setStudentList(filtered);
  };

  return (
    <div>
      <SearchBar searchfield={searchfield} handleChange={updatesearchfield} />

      <div className="directory-item">
        <StudentCard studentList={studentList} />
      </div>
    </div>
  );
};
export default StudentDirectory;
