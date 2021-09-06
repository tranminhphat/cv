import React from 'react'

const ContactInfo = () => {
	return (
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
	)

}

export default ContactInfo