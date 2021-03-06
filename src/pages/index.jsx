import React from "react"
import { Helmet } from "react-helmet"
import FavIcon from '../static/avatar.png'

const HomePage = () => (
  <div
    className="container"
    style={{
      fontFamily: "Raleway, Helvetica, Arial, sans-serif",
      maxWidth: 720,
      margin: "1rem auto",
      lineHeight: 1.4,
      fontWeight: 300,
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Phat Tran's CV</title>
      <meta name="author" content="Phat Tran" />
      <meta name="description" content="Phat Tran's curriculum vitae" />
      <link rel="icon" type="image/png" href={FavIcon} sizes="16x16" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
    </Helmet>

    <main style={{ display: "flex", flexDirection: "column" }}>
      <div className="name" style={{textAlign: 'center'}}>
        <h1 style={{fontWeight: 100, fontSize: '50px'}}>Tran Minh <span style={{fontWeight: 500}}>Phat</span></h1>
      </div>

      <div
        className="contact-info"
        style={{ display: "flex", flexDirection: "column", marginTop: '-40px' }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>
            <span>Ho Chi Minh City, Viet Nam</span>
          </p>
          <p>
            <span>(+84) 909771795</span>
          </p>
          <p>
            <span>phattm204@gmail.com</span>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: '-20px' }}>
          <p>
            <span>
              <a href="https://github.com/tranminhphat" target="_blank" rel="noreferrer">
                github.com/tranminhphat
              </a>
            </span>
          </p>
          <p>
            <span>
              <a
                href="https://www.linkedin.com/in/tranminhphat/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/tranminhphat{" "}
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="education">
        <div>
          <h2 style={{textTransform: 'uppercase', fontWeight: 200, fontSize: '30px'}}>education</h2>
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
            <li>GPA: 7.65 / 10</li>
            <li>Degree Classification: Good</li>
            <li>
              Thesis Title: Building a web application help connecting the
              host of experience activities with the guest
            </li>
          </ul>
        </div>
      </div>

      <div className="work-experience">
        <div>
          <h2 style={{textTransform: 'uppercase', fontWeight: 200, fontSize: '30px'}}>work experience</h2>
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

      <div className="personal-project">
        <div>
          <h2 style={{textTransform: 'uppercase', fontWeight: 200, fontSize: '30px'}}>personal project</h2>
          <hr />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <h3>Phazel - An algorithm visualizer</h3>
            <i>Aug 2020 - Sep 2020</i>
          </div>
          <div>
            <p>
              Phazel is an web application made with React that allows you to
              visualize sorting algorithms with a friendly UI. The project idea
              is inspired by <b>Clément Mihailescu</b>, who is a Youtuber, after
              he uploaded a video on how to visualize Merge Sort algorithm.
            </p>
            <p>
              In this app, the user can:
              <ul>
                <li>Generate an array to sort manually or automatically</li>
                <li>Change the speed of the algorithm</li>
                <li>Change the length of the array</li>
              </ul>
            </p>
            <p>
              The currently implemented algorithms: Bubble Sort, Selection Sort,
              Insertion Sort, Merge Sort, Quick Sort, Heap Sort.
            </p>
            <p>
              Demo:{" "}
              <a href="https://phazel.firebaseapp.com/sortalgo" target="_blank" rel="noreferrer">
                https://phazel.firebaseapp.com/sortalgo
              </a>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <h3>Covid-19 Statistics</h3>
            <i>Aug 2020 - Sep 2020</i>
          </div>
          <div>
            <p>
              An web application built by React and Ant Design that shows the
              affect of Covid-19 with statistical information by the data from
              the Ministry Of Health around the world.
            </p>
            <p>
              The UIs that implemented to show in the table form express
              information about the number of total cases, new cases or new
              deaths, etc. The website also has an interactive hover-map which
              will show the statictical information about the specific country
              that user hover mouse on.
            </p>
            <p>
              User can find the statistical information by country, especially
              by province of Viet Nam.
            </p>
            <p>
              Demo:{" "}
              <a
                href="https://tranminhphat.github.io/covid19-stats/"
                target="_blank"
                rel="noreferrer"
              >
                https://tranminhphat.github.io/covid19-stats/
              </a>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <h3>Bookstore</h3>
            <i>Apr 2020 - Jul 2020</i>
          </div>
          <div>
            <p>
              Bookstore is a project for Mobile Development class at UIT. The
              app has been built by React Native for book business field, it has
              a friendly theme and comes with some administrator and client
              features.
            </p>
            <p>
              Administrator: be able to manage accounts, books, orders and
              statistical.
            </p>
            <p>
              Client: easy to register, login and come along with some features
              like search, order, choose favorite, rating, comment. The client
              is also able to tracking or cancle orders, manage their own
              personal information.
            </p>
            <p>
              Demo:{" "}
              <span>
                <a
                  href="https://drive.google.com/drive/folders/13oKOes_6y61P3mtns4zfk_CzuZu8ZZGa?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </span>
            </p>
          </div>
                <div className="personal-project">
        <div>
          <h2 style={{textTransform: 'uppercase', fontWeight: 200, fontSize: '30px'}}>skills</h2>
          <hr />
          <div >
            <h3>Technical Skills</h3>
            <p>Programming Languages: JavaScript, TypeScript</p>
            <p>Tools & Technologies: HTML5, CSS3, React.js, Redux, Node.js, Express.js, MongoDB</p>
          </div>
          <div >
            <h3>Soft Skills</h3>
            <p>Team-working, Self-learning</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default HomePage
