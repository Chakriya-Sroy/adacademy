import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer id='footer' className='footer'>
     <div class="footer-content">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <Link to="index.html" class="logo d-flex align-items-center">
              <span>AD Academy</span>
            </Link>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div class="social-Links d-flex  mt-3">
              <Link to="#" class="twitter"><i class="bi bi-twitter"></i></Link>
              <Link to="#" class="facebook"><i class="bi bi-facebook"></i></Link>
              <Link to="#" class="instagram"><i class="bi bi-instagram"></i></Link>
              <Link to="#" class="Linkedin"><i class="bi bi-Linkedin"></i></Link>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-Links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bi bi-dash"></i> <Link to="/">Home</Link></li>
              <li><i class="bi bi-dash"></i> <Link to="/academy">Academy</Link></li>
              <li><i class="bi bi-dash"></i> <Link to="/about">About us</Link></li>
              <li><i class="bi bi-dash"></i> <Link to="/resource">Resource</Link></li>
              <li><i class="bi bi-dash"></i> <Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-Links">
            <h4>Academy</h4>
            <ul>
              <li><i class="bi bi-dash"></i> <Link to="/academy#design-class">Design Class</Link></li>
              <li><i class="bi bi-dash"></i> <Link to="/academy#computer-program">Computer Program</Link></li>
              <li><i class="bi bi-dash"></i> <Link to="/academy#new-classes">New Classes</Link></li>
              <li><i class="bi bi-dash"></i> <Link to="/academy#testimonial">Testimonial</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>

          </div>

        </div>
      </div>
    </div>
    <div class="footer-legal">
      <div class="container">
        <div class="copyright">
          © Copyright <strong><span>AD Academy</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
              Designed by <Link to="https://bootstrapmade.com/">Chakriya Sroy</Link>
        </div>
      </div>
    </div>
    </footer>
  )
}
