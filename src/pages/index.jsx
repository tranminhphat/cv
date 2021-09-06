import React from "react"
import { Helmet } from "react-helmet"
import ContactInfo from '../components/ContactInfo'
import EducationSection from '../components/EducationSection'
import Header from '../components/Header'
import PersonalProjectSection from '../components/PersonalProjectSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import FavIcon from '../static/avatar.png'

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
			<Header />
			<ContactInfo />			
			<EducationSection />
			<WorkExperienceSection />
			<PersonalProjectSection />
  	</main>
	</div>
)

export default HomePage;