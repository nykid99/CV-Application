import React from "react"


const Personal = ({StartCV,editPersonal}) => {
  return (
    <div id = "PersonalSection">
      <h2>Personal Details</h2>
      <textarea
        className = "descInput"
        type = "text"
        name = "description"
        placeholder= "Summary"

        onChange={(event) => editPersonal(event)}
      >
      </textarea>
      <input 
        className = "regInput"
        type = "text"
        name="firstName"
        placeholder="First Name"
        value = {StartCV}
        onChange={(event) => editPersonal(event)}
      >
      </input>
      <input 
        className = "regInput"
        type = "text"
        name="lastName"
        placeholder="Last Name"
        onChange={(event) => editPersonal(event)}
      >
      </input>
      <input 
        className = "regInput"
        type = "text"
        name="email"
        placeholder="Email"
        onChange={(event) => editPersonal(event)}
      >
      </input>
      <input 
        className = "regInput"
        type = "text"
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={(event) => editPersonal(event)}
      >
      </input>
    </div>
  )
}
export default Personal