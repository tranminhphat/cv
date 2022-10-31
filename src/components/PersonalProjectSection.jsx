import React from 'react';

const PersonalProjectSection = () => {
  return (
    <div id="personal-project">
      <div>
        <h2 style={{ textTransform: "uppercase", fontSize: "30px" }}>
          personal projects
        </h2>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Tripsy</h3>
          <i>Feb 2021 - Jul 2021</i>
        </div>
        <div>
          <p>
            Tripsy is an web application built with React.js and Node.js that
            helps connecting the host of experience activities with the guest.
          </p>
          <p>
            The main purpose of this application is providing a platform where
            the host can create experience activities that they are expert in
            that field and the guest can join any of that activities and gain
            the real experience quickly and conveniently.
          </p>
          <p>
            <b>Technologies used: </b>TypeScript, React, React Router, React
            Query, Formik, Material UI, TailwindCSS, Node.js, Express, MongoDB,
            Mongoose, Cloudinary API, Stripe API, Mapbox API.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Phazel - An algorithm visualizer</h3>
          <i>Aug 2020 - Sep 2020</i>
        </div>
        <div>
          <p>
            Phazel is an web application made with React that allows you to
            visualize sorting algorithms with a friendly UI. The project idea is
            inspired by <b>Clément Mihailescu</b>, who is a Youtuber, after he
            uploaded a video on how to visualize Merge Sort algorithm.
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
            <b>Technologies used: </b>React, React Router, React Strap,
            Firebase.
          </p>
          <p>
            <b>Demo: </b>
            <a
              href="https://phazel.firebaseapp.com/sortalgo"
              target="_blank"
              rel="noreferrer"
            >
              https://phazel.firebaseapp.com/sortalgo
            </a>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Covid-19 Statistics</h3>
          <i>Aug 2020 - Sep 2020</i>
        </div>
        <div>
          <p>
            An web application built by React and Ant Design that shows the
            affect of Covid-19 with statistical information by the data from the
            Ministry Of Health around the world.
          </p>
          <p>
            The UIs that implemented to show in the table form express
            information about the number of total cases, new cases or new
            deaths, etc. The website also has an interactive hover-map which
            will show the statictical information about the specific country
            that user hover mouse on.
          </p>
          <p>
            User can find the statistical information by country, especially by
            province of Viet Nam.
          </p>
          <p>
            <b>Technologies used: </b>React, React Router, React Simple Maps,
            Ant Design.
          </p>
          <p>
            <b>Demo: </b>
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
          }}
        >
          <h3>Bookstore</h3>
          <i>Apr 2020 - Jul 2020</i>
        </div>
        <div>
          <p>
            Bookstore is a project for Mobile Development class at UIT. The app
            has been built by React Native for book business field, it has a
            friendly theme and comes with some administrator and client
            features.
          </p>
          <p>
            Administrator: be able to manage accounts, books, orders and
            statistical.
          </p>
          <p>
            Client: easy to register, login and come along with some features
            like search, order, choose favorite, rating, comment. The client is
            also able to tracking or cancle orders, manage their own personal
            information.
          </p>
          <p>
            <b>Technologies used: </b>React Native, Material UI, Firebase.
          </p>
          <p>
            <b>Demo: </b>
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
      </div>
    </div>
  )
}

export default PersonalProjectSection
