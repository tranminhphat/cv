import React from "react"

const HomePage = () => (
  <div
    className="container"
    style={{
      fontFamily: "Helvetica, Arial, sans-serif",
      maxWidth: 720,
      margin: "1rem auto",
      lineHeight: 1.4,
    }}
  >
    <main style={{ display: "flex", flexDirection: "column" }}>
      <div className="name">
        <h1>Tran Minh Phat</h1>
      </div>

      <div
        className="contact-info"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <b>location: </b>
            <span>Ho Chi Minh City, Viet Nam</span>
          </p>
          <p>
            <b>phone number: </b>
            <span>(+84) 909771795</span>
          </p>
          <p>
            <b>email: </b>
            <span>phattm204@gmail.com</span>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <b>github: </b>
            <span>
              <a href="https://github.com/tranminhphat" target="_blank">
                https://github.com/tranminhphat
              </a>
            </span>
          </p>
          <p>
            <b>linkedin: </b>
            <span>
              <a
                href="https://www.linkedin.com/in/tranminhphat/"
                target="_blank"
              >
                https://www.linkedin.com/in/tranminhphat/{" "}
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="education">
        <div>
          <h2>education</h2>
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
            <i>Sep 2017 - July 2021</i>
          </div>
        </div>
        <div>
          <ul>
            <li>my major: Information System</li>
            <li>my gpa: 7.65 / 10</li>
            <li>my degree classification: Good</li>
            <li>
              my thesis title: Building a web application help connecting the
              host of experience activities with the guest
            </li>
          </ul>
        </div>
      </div>

      <div className="work-experience">
        <div>
          <h2>work experience</h2>
          <hr />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <h3>Front-end Intern Developer, BigIn</h3>
            <i>Sep 2020 - Dec 2020</i>
          </div>
        </div>
        <div>
          <p>
            As an intern developer, i was responsible for working with BA team,
            Designer and Back-end team to implementing web-app UI for company's
            project using Vue.js
          </p>
          <p>
            I also did a little bit mobile development by implementing
            mobile-app UI for company's project using React Native and
            NativeScript
          </p>
        </div>
      </div>
    </main>
  </div>
)

export default HomePage
