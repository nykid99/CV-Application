import React from "react";

const Educations = ({startCV, editEducation, deleteEducation}) => {
  return (
    <div id = "EducationSection">
      <h2>Education</h2>
      <ul>
      {startCV.educations.map((education) => {
        return(
          <li key = {education.id}>
            <input 
              className = "regInput"
              type = "text"
              name="schoolName"
              placeholder="School"
              value = {education.schoolName}
              onChange={(event) => editEducation(event, education.id)}
            >
            </input>
            <input 
              className = "regInput"
              type = "text"
              name="major"
              placeholder="Major"
              value = {education.major}
              onChange={(event) => editEducation(event, education.id)}
            >
            </input>
            <label htmlFor = "gradDate">Graduation Date</label>
            <input 
              className = "regInput"
              type = "date"
              name="gradDate"
              value = {education.gradDate}
              onChange={(event) => editEducation(event, education.id)}
            >
            </input>
            <button onClick={() => deleteEducation(education.id)}>Delete</button>
          </li>
        )
      })}
      </ul>
    </div>

  )
}
export default Educations