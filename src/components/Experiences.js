import React from "react"


const Experiences = ({startCV, editExperience, deleteExperience}) => {
  
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {startCV.experiences.map((experience) => {
          return(
            <li key = {experience.id}>
              <input 
                className = "regInput"
                type = "text"
                name="companyName"
                placeholder="Company"
                value = {experience.companyName}
                onChange={(event) => editExperience(event, experience.id)}
              >
              </input>
              <input 
                className = "regInput"
                type = "text"
                name="title"
                placeholder="Title"
                value = {experience.title}
                onChange={(event) => editExperience(event, experience.id)}
              >
              </input>
              <textarea 
                className = "descInput"
                type = "text"
                name="tasks"
                placeholder="Tasks"
                value = {experience.tasks}
                onChange={(event) => editExperience(event, experience.id)}
              >
              </textarea>
              <label htmlFor = "dateFrom">From</label>
              <input 
                className = "regInput"
                type = "date"
                name="dateFrom"
                value = {experience.dateFrom}
                onChange={(event) => editExperience(event, experience.id)}
              >
              </input>
              <label htmlFor = "dateTo">To</label>
              <input 
                className = "regInput"
                type = "date"
                name="dateTo"
                value = {experience.dateTo}
                onChange={(event) => editExperience(event, experience.id)}
              >
              </input>
              <button onClick={() => deleteExperience(experience.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>

  )
}
export default Experiences