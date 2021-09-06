import React from "react"

const EducationSection = () => {
  return (
    <div id="education">
      <div>
        <h2 style={{ textTransform: "uppercase", fontSize: "30px" }}>
          education
        </h2>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <h3>Bachelor of Software Engineering at UIT</h3>
          <i>Sep 2017 - Jul 2021</i>
        </div>
      </div>
      <div>
        <ul>
          <li>Major: Information System</li>
          <li>GPA: 7.67 / 10</li>
          <li>Degree Classification: Good</li>
        </ul>
      </div>
    </div>
  )
}

export default EducationSection
