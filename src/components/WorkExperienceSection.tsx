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
          <h3>Software Engineer at Kobiton</h3>
          <i>Sep 2021 - current</i>
        </div>
        <div>
          <p>
            <b>Project: </b>
              <a href="https://kobiton.com/" target="_blank">Kobiton</a>
            {" "} is a cloud platform for executing automated and manual mobile device testing that
            enables the user to test their Android, iOS, and Web apps on real, physical phones and
            tablets that are hosted by Kobiton cloud. A test report will be generated for each device
            being part of test execution, which contains video, playback, detailed logs, HTTP Commands, and Metadata.
          </p>
          <p>
            <b>Responsibilities:</b>
          </p>
          <ul>
            <li>Work as a full-stack developer in a scrum team, involve in grooming, planning, development and release process.</li>
            <li>Implement new features for the web application.</li>
            <li>Responsible for three important modules:
              <br />
                - XCUITest: is an automated UI test framework for performing iOS automation testing. I was responsible for integrating the framework into the Kobiton product.
              <br />
                - Dynamic Pricing: is the subscription and billing service management module of the Kobiton product. I was responsible for planning and migrating old pricing plans in 2021
                to new pricing plans in 2022.
              <br />
                - Automated Script-based Installer: is the Kobiton's products installer implemented in Bash, it supports install and upgrade the product.
                This installer is significant for both the end user as well as the internal team, as it reduces the steps and time to install the product. It also helps to eliminate errors that are easy to encounter if installed manually.
              </li>
            <li>Troubleshooting & fix production issues.</li>
          </ul>
          <p>
            <b>Technologies used: </b>React, React Router, Redux, Node.js, Koa.js, Sequelize, PostgreSQL, Redis, Recurly,
            Rust, Kafka, gRPC, Bash scripting, AWS S3, Jenkins, Kibanna.
          </p>
        </div>
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
            <b>Project: </b>
            <a href="https://agreementexpress.com/" target="_blank">Agreement Express</a>
            {" "}is a hosted contract
            management software platform that enables organizations to replace
            all manual processes so that you can automate, and accelerate
            contracts through each of these bottlenecks in your contract
            process.
          </p>
          <p>
            <b>Responsibilities:</b>
          </p>
          <ul>
            <li>Work as a full-stack developer in a scrum team.</li>
            <li>Implement new features for the web application.</li>
            <li>Write unit tests to meet the project threshold.</li>
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
            <b>Project: </b>
            <a href="https://tourguideplan.com/#intro" target="_blank">Tour Guide Plan</a>
            {" "}is to help travelers and tour operation agents
            find their appropriate Tour Guide. They can post their job requirements
            to the marketplace and the Tour Guide can bid for the jobs.
            They can even contact with appropriate Tour Guide.
          </p>
          <p>
            <b>Responsibilities:</b>
            <ul>
              <li>Work in a scrum team and coordinate with PO on requirements to meet client's expectations.</li>
              <li>Collaborate with back-end team and designer to implement new UX/UI.</li>
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
