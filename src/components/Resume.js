import React, {useState, useRef} from "react"
import Educations from "./Educations"
import Experiences from "./Experiences"
import Personal from "./Personal";
import Preview from "./Preview";
import {nanoid} from 'nanoid';
import { useReactToPrint } from 'react-to-print';

const Resume = () => {


  // print handlers
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

    const exampleCV = {
        personalInfo:{
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          firstName:'John',
          lastName:'Doe',
          email:'JDoe@email.com',
          phoneNumber:'123-456-7890',
        },
        experiences:[
          {
            id: nanoid(),
            companyName: 'Amazon',
            title: 'Senior Software Developer',
            tasks: 'Developed a lot of stuff',
            dateFrom: '2022-04-02',
            dateTo: '2023-04-02',
          },
          {
            id: nanoid(),
            companyName: 'Amazon',
            title: 'Junior Software Developer',
            tasks: 'Developed some stuff',
            dateFrom: '2022-04-02',
            dateTo: '2023-04-02',
          }
        ],
        educations:[
          {
            id: nanoid(),
            schoolName: 'Super Random University',
            major: 'MS in Computer Science',
            gradDate: '2022-05-20',
          },
          {
            id: nanoid(),
            schoolName: 'Random University',
            major: 'BS in Computer Science',
            gradDate: '2020-05-20',
          }
        ],
      };
      const[startCV, setCV] = useState(exampleCV);

    
      const addEducation = () => {
        setCV((prevState) => ({
          ...prevState,
          educations: [
            ...prevState.educations,
            {
              id: nanoid(),
              schoolName: '',
              major: '',
              gradDate: '',
            },
          ],
        }))
      }
      const deleteEducation = (selectId) => {
        setCV((prevState) => {
          const newEducation = prevState.educations.filter(
            (educationItem) => educationItem.id !== selectId
          )
          return { ...prevState, educations: [...newEducation] }
        })
      }
    
      const editEducation = (event, selectId) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
    
        setCV((prevState) => {
          const newEducation = prevState.educations.map((educationItem) => {
            if (educationItem.id === selectId) {
              return { ...educationItem, [fieldName]: fieldValue }
            }
            return educationItem
          })
          return { ...prevState, educations: [...newEducation] }
        })
    
      }
    
    
      const addExperience = () => {
        setCV((prevState) => ({
          ...prevState,
          experiences: [
            ...prevState.experiences,
            {
              id: nanoid(),
              companyName: '',
              title: '',
              tasks: '',
              dateFrom: '',
              dateTo: '',
            },
          ],
        }))
      }
      const deleteExperience = (selectId) => {
        setCV((prevState) => {
          const newExperience = prevState.experiences.filter(
            (experienceItem) => experienceItem.id !== selectId
          )
          return { ...prevState, experiences: [...newExperience] }
        })
      }
      const editExperience = (event, selectId) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
    
        setCV((prevState) => {
          const newExperience = prevState.experiences.map((experienceItem) => {
            if (experienceItem.id === selectId) {
              return { ...experienceItem, [fieldName]: fieldValue }
            }
            return experienceItem
          })
          return { ...prevState, experiences: [...newExperience] }
        })
    
      }
    
      const editPersonal = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        setCV((prevState) => ({
          ...prevState,
          personalInfo: {
            ...prevState.personalInfo,
            [fieldName]: fieldValue,
          },
        }))
      }
    
  return (
    <div id = "Resume">

        <div id = "inputField">
            <Personal
              startCV = {startCV}
              editPersonal={editPersonal}
            />
            <Experiences
              startCV = {startCV}
              editExperience = {editExperience}
              deleteExperience = {deleteExperience}
            />
            <button onClick={addExperience}>Add</button>
            <Educations
              startCV = {startCV}
              editEducation = {editEducation}
              deleteEducation = {deleteEducation}
            />         

            <button onClick={addEducation}>Add</button>
   
        </div>
        <button 
          id = "printButton"
          onClick={handlePrint}>PRINT PDF
        </button>
        <div
          ref = {componentRef}
          id = "previewField">
          <Preview
            startCV = {startCV}
          />

        </div>
    </div>
  )
}
export default Resume