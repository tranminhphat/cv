import React from "react"
import { Helmet } from "react-helmet"
import FavIcon from '../static/avatar.png'
import MyFace from '../static/my-face.jpg'

const HomePage = () => (
  <div
    className="container"
    style={{
      fontFamily: "Inter,Helvetica, Arial, sans-serif",
      maxWidth: 720,
      margin: "2rem auto",
      lineHeight: 1.4,
      fontWeight: 300,
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Phat Tran's resume</title>
      <meta name="author" content="Phat Tran" />
      <meta name="description" content="Phat Tran's curriculum vitae" />
      <link rel="icon" type="image/png" href={FavIcon} sizes="16x16" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </Helmet>

    <main style={{ display: "flex", flexDirection: "column" }}>
      <div id="me">
        <div>
          <img src={MyFace} style={{borderRadius: '8px'}} width={80} height={80} alt="my avatar" />
        </div>
        <h1 style={{fontSize: '50px', margin: '8px 0'}}>Phat Minh Tran</h1>
      </div>

      <div
        id="contact-info"  
        style={{display: 'flex', justifyContent: 'space-between'}}
      >
        <div>
          <p>
            <span>Ho Chi Minh City, Viet Nam</span>
          </p>
          <p>
            <span style={{textDecoration: "underline"}}>phattm204@gmail.com</span>
          </p>
        </div>
        <div>
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

      <div id="education">
        <div>
          <h2 style={{textTransform: 'uppercase', fontSize: '30px'}}>education</h2>
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
          </ul>
        </div>
      </div>

      <div id="work-experience">
        <div>
          <h2 style={{textTransform: 'uppercase', fontSize: '30px'}}>work experience</h2>
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
            As an intern developer, I was responsible for working with BA team,
            Designer and Back-end team to implementing web-app UI for company's
            project using Vue.js.
          </p>
          <p>
            I also did a little bit mobile development by implementing
            mobile-app UI for company's project using React Native and
            NativeScript.
          </p>
            <p><b>Technologies used: </b>Vue.js, Nuxt.js, Element UI, React Native, NativeScript, Firebase.</p>
        </div>
      </div>

      <div id="personal-project">
        <div>
          <h2 style={{textTransform: 'uppercase', fontSize: '30px'}}>personal project</h2>
          <hr />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <h3>Tripsy</h3>
            <i>Feb 2021 - now</i>
          </div>
          <div>
            <p>
              Tripsy is an web application built with React.js and Node.js that helps connecting the host of experience activities with the guest.
            </p>
            <p>
             The main purpose of this application is providing a platform where the host can create experience activities that they are expert in that field and the guest can join any of that activities and gain the real experience quickly and conveniently.
            </p>
            <p><b>Technologies used: </b>TypeScript, React, React Router, React Query, Formik, Material UI, TailwindCSS, Node.js, Express, MongoDB, Mongoose, Cloudinary API, Stripe API, Mapbox API.</p>
          </div>
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
            <p><b>Technologies used: </b>React, React Router, React Strap, Firebase.</p>
            <p>
              <b>Demo:{" "}</b>
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
            <p><b>Technologies used: </b>React, React Router, React Simple Maps, Ant Design.</p>
            <p>
              <b>Demo:{" "}</b>
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
            <p><b>Technologies used: </b>React Native, Material UI, Firebase.</p>
            <p>
              <b>Demo:{" "}</b>
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
        <div id="personal-project">
          <div>
            <h2 style={{textTransform: 'uppercase', fontSize: '30px'}}>skills</h2>
            <hr />
            <div >
              <h3>Technical Skills</h3>
              <p>Programming Languages: JavaScript, TypeScript.</p>
              <p>Tools & Technologies: HTML5, CSS3, SASS, React.js, Gatsby, React Router, React Query, React Redux, Node.js, Express.js, Mongoose.</p>
              <p>Databases: MongoDB, PostgreSQL.</p>
            </div>
            <div >
              <h3>Soft Skills</h3>
              <p>Team-working, Self-learning.</p>
            </div>
            </div>
            </div>
          </div>
      </div>
    </main>
  </div>
)

export default HomePage;
