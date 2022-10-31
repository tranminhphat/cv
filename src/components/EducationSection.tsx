import React from "react"

const EducationSection = () => {
  return (
    <div id="education">
      <h2 style={{ textTransform: "uppercase", fontSize: "30px" }}>
        education and certificates
      </h2>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Bachelor of Software Engineering at UIT</h3>
        <i>Sep 2017 - Jul 2021</i>
      </div>
      <div>
        <p>Major: Information System</p>
        <ul>
          <li>GPA: 7.7 / 10</li>
          <li>Degree Classification: Good</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>TOEIC Listening and Reading Certificate</h3>
        <i>Nov 2021 - Nov 2023</i>
      </div>
      <div>
        <p>Total score: 930</p>
        <ul>
          <li>Listening score: 465</li>
          <li>Reading score: 465</li>
        </ul>
      </div>
    </div>
  )
}

export default EducationSection
