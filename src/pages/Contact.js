import React from 'react'
import { faClock,faEnvelope,faPhone,faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hero from '../components/Hero'
export default function Contact() {
  return (
    <>
    <Hero page="contact"/>
    <section id="school-tour" className='school-tour'>
       <div className='container'>
          <div className='section-title'>
              <h2>School Tour</h2>
              <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
          </div>
       </div>
    </section>
    <section id="contact" className="contact">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        {/* <div className="section-title">
          <h2>Contact</h2>
          <p>paragraph</p>
        </div> */}

        <div className="row gx-lg-0 gy-4">

          <div className="col-lg-4">

            <div className="info-container d-flex flex-column align-items-center justify-content-center">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"><FontAwesomeIcon icon={faMapLocation}/></i>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"><FontAwesomeIcon icon={faEnvelope}/></i>
                <div>
                  <h4>Email:</h4>
                  <p>training@adacademy.com</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"><FontAwesomeIcon icon={faPhone}/></i>
                <div>
                  <h4>Call:</h4>
                  <p>017 650 022/077 720 611</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className='flex-shrink-0'> <FontAwesomeIcon icon={faClock} /></i>
                <div>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required=""/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required=""/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required=""/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="7" placeholder="Message" required=""></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  
    </>
  )
}
