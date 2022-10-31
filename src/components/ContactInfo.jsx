import React from 'react'
import GithubIcon from '../static/github.svg'
import LinkedinIcon from '../static/linkedin.svg'
import LocationIcon from '../static/location.svg'
import EmailIcon from '../static/mail.svg'

const ContactInfo = () => {
	return (
      <div
        id="contact-info"
        style={{display: 'flex', justifyContent: 'space-between'}}
      >
        <div>
          <p>
            <img src={LocationIcon} alt="my email" width="20" height="20" style={{marginRight: "4px"}} />
            <span>Ho Chi Minh City, Viet Nam</span>
          </p>
          <p>
            <img src={EmailIcon} alt="my email" width="20" height="20" style={{marginRight: "4px"}} />
            <span style={{textDecoration: "underline"}}>phattm204@gmail.com</span>
          </p>
        </div>
        <div>
          <p>
            <img src={GithubIcon} alt="my email" width="20" height="20" style={{marginRight: "4px"}} />
            <span>
              <a href="https://github.com/tranminhphat" target="_blank" rel="noreferrer">
                github.com/tranminhphat
              </a>
            </span>
          </p>
          <p>
            <img src={LinkedinIcon} alt="my email" width="20" height="20" style={{marginRight: "4px"}} />
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
	)

}

export default ContactInfo