import React from "react"

const WorkExperienceSection = () => {
  return (
    <div id="work-experience">
      <div>
        <h2 style={{ textTransform: "uppercase", fontSize: "30px" }}>
          work experience
        </h2>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <h3>Software Engineer at KMS Technology, Inc.</h3>
          <i>May 2021 - Sep 2021</i>
        </div>
        <div>
          <p>
            <b>Project:</b> Agreement Express
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
            <li>
              Implement new UI/features for the X-Ray and Diff Tool application
              using React.js and Java.
            </li>
            <li>Write unit tests for React Projects using Jest and Enzyme.</li>
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
            marginBottom: "2rem",
          }}
        >
          <h3>Front-end Intern Developer at BigIn</h3>
          <i>Sep 2020 - Dec 2020</i>
        </div>
        <div>
          <p>
            As an intern developer, I was responsible for working with BA team,
            Designer and Back-end team to implementing web-app UI for company's
            project using Vue.js.
          </p>
          <p>
            I also did a little bit mobile development by implementing
            mobile-app UI for company's project using React Native and
            NativeScript.
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
