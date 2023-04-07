import React from "react"

const Preview = ({startCV}) => {
  return (
    <div>
        {/* personalInfo */}
        <div id ="previewFieldPersonalSection">
            <h3>{startCV.personalInfo.firstName} {startCV.personalInfo.lastName}</h3>
            <div>{startCV.personalInfo.email}</div>
            <div>{startCV.personalInfo.phoneNumber}</div>
        </div>
        <h3>Summary</h3>
        <hr></hr>
        <div id = "listItemTasks">{startCV.personalInfo.description}</div>
        <h3>Education</h3>
        <hr></hr>
        <div id = "previewFieldExperienceSection">
            <ul>
                {startCV.educations.map((education) => {
                return(
                    <li key = {education.id}>
                        <div id = "listItem">
                            <h4>{education.schoolName}</h4>
                            <div>{education.major}</div>
                            <div>{education.gradDate}</div>
                        </div>

                    </li>
                )
                })}
            </ul>
        </div>
        <h3>Experience</h3>
        <hr></hr>
        <div id = "previewFieldEducationSection">

            <ul>
                {startCV.experiences.map((experience) => {
                return(
                    <li key = {experience.id}>

                        <div id = "listItem">
                            <h4>{experience.companyName}</h4><span>{experience.title}</span><span>{experience.dateFrom} - {experience.dateTo}</span>  
                        </div>
                        <div id = "listItemTasks">{experience.tasks}</div>
                    </li>
                )
                })}
            </ul>
        </div>












    </div>
  )
}
export default Preview