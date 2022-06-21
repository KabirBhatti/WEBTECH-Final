import React from 'react'

export const displayList = () => {
  return (
    <div>
        <td></td>
        <td style={{ height: "25px" }}>
        <AutoCompleteText 
            items={courses.filter(course => course.semester === sem.sno) }
            setCourse = {setCourse} 
        />
        </td>
        <td></td>
    </div>
  )
}
