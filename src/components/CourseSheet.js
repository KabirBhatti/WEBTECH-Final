import React from "react";
import AutoCompleteText from "./AutoCompleteText.js"
import courses from "./listCourses.js"

const CourseSheet = () => {

    let sems = [
      { sno: 1, name: "1st" , show: false, selected:[]},
      { sno: 2, name: "2nd" , show: false, selected:[]},
      { sno: 3, name: "3rd" , show: false, selected:[]},
      { sno: 4, name: "4th" , show: false, selected:[]},
      { sno: 5, name: "5th" , show: false, selected:[]},
      { sno: 6, name: "6th" , show: false, selected:[]},
      { sno: 7, name: "7th" , show: false, selected:[]},
      { sno: 8, name: "8th" , show: false, selected:[]},
    ];
    const setCourse = (course) => {
      //TO APPEND
      for (let index = 0; index < 8; index++) {
        if(index === course.semester){
          sems[index].selected.push(course);
          sems[index].show = true;
        }
      }
      //TO PRINT
      for (let i = 0; i < 8; i++) {
        if(sems[i].selected.length > 0){
          console.log(sems[i].selected)
        }
      }
    }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th style={{ width: "75px" }}>Code</th>
            <th style={{ width: "450px" }}>Title</th>
            <th style={{ width: "25px", textAlign: "center" }}>Cr</th>
          </tr>
          </tbody>
          {sems.map((sem) => (
            <tbody>
              <tr>
                <th colspan="3" style={{ fontWeight: "bold" }}>
                  {sem.name} Semester
                </th>
              </tr>

              
              {/* {sem[sem.semno].selected.length > 0 &&(
                <tr>
                <td>{sems[1]}</td>
                <td style={{ height: "25px" }}>
                
                </td>
                <td></td>
              </tr>
              )} */}


              <tr>
                <td></td>
                <td style={{ height: "25px" }}>
                <AutoCompleteText 
                  items={courses.filter(course => course.semester === sem.sno) }
                  setCourse = {setCourse} 
                />
                </td>
                <td></td>
              </tr>
            </tbody>
          ))}
        </table>
    </div>
  );
};

export default CourseSheet;
