import React from "react"

const WorkExperienceSection = () => {
  return (
    <div id="work-experience">
      <div>
        <h2 style={{ textTransform: "uppercase", fontSize: "30px" }}>
          work experiences
        </h2>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Software Engineer at KMS Technology, Inc.</h3>
          <i>May 2021 - Sep 2021</i>
        </div>
        <div>
          <p>
            <b>Project:</b> <a href="https://agreementexpress.com/" target="_blank">Agreement Express</a>
          </p>
          <p>
            <b>Project Description:</b> Agreement Express is a hosted contract
            management software platform that enables organizations to replace
            all manual processes so that you can automate, and accelerate
            contracts through each of these bottlenecks in your contract
            process.
          </p>
          <p>
            <b>Responsibilities:</b>
          </p>
          <ul>
            <li>Work as a developer in a scrum team, involve in designing, estimation, and development of two important modules of the application.</li>
            <li>Implement new features for the application from front to back.</li>
            <li>Write unit tests to meet the threshold.</li>
            <li>Fix issues and production bugs that remains in backlog.</li>
          </ul>
          <p>
            <b>Technologies used: </b>TypeScript, React.js, Redux, Redux
            Observable, Spring Boot, Tomcat, Ant, Jest, JUnit.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Front-end Developer Intern at BigIn</h3>
          <i>Sep 2020 - Dec 2020</i>
        </div>
        <div>
          <p>
            <b>Project:</b> <a href="https://tourguideplan.com/#intro" target="_blank">Tour Guide Plan</a>
          </p>
          <p>
            <b>Project Description:</b> Tour Guide Plan is to help travelers and tour operation agents
               find their appropriate Tour Guide. They can post their job requirements
               to the marketplace and the Tour Guide can bid for the jobs.
               They can even contact with appropriate Tour Guide.
          </p>
          <p>
            <b>Responsibilities:</b>
            <ul>
              <li>As an intern developer, my main job is implemented new UI for the project using Vue.js.</li>
              <li>Coordinate with Product Owner and Designer on requirements to meet client expectations.</li>
              <li>Fix issues & bugs in backlog.</li>
            </ul>
          </p>
          <p>
            <b>Technologies used: </b>Vue.js, Nuxt.js, Element UI, React Native,
            NativeScript, Firebase.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceSection
