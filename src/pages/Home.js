import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../assets/images/acd1.jpg'
import pic2 from '../assets/images/acd2.jpg'
import about from '../assets/images/about.jpg'
import { faChevronCircleRight, faCircleChevronRight,faChevronRight,faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import logo from '../assets/images/LOGO MARK.png';
export default function Home() {

  const [activeItems, setActiveItems] = useState([]);

  const toggleFAQ = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };
  return (
   <>
    <section id="hero" className="d-flex align-items-center scrolled-offset">
    <div className="container aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
      <h1>Welcome to <span>AD Academy</span></h1>
      <h2>We are team of talented designers making website</h2>
    </div>
  </section>
  <section id="about" class="about">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row gx-0">
            <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <h3>Who We Are</h3>
                <h2>Our Academy</h2>
                <p>
                We are a group of different people with diverse backgrounds in architecture and design, each possessing over 10 years of expertise. We are dedicated to providing high-quality human resources for the industry. Based on this belief, we aspire to become the leading design training center in Cambodia. 
                </p>
                <Link className='btn btn-primary ps-5 pe-5' to="about">Read More</Link>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
              <img src={about} className="img-fluid" alt="who are we picture"/>
            </div>

          </div>
        </div>
    </section>
    <section className="academy" style={{ background:"rgba(40, 58, 90, 1)",color:"white" }}>
      <div className='container'>
          <h1 className="section-title text-start">Academy</h1>
          <div className="row justify-content-around text-black" style={{ height:"300px" }}>
              <div className='col-lg-5 col-md-6 col-sm-12 rounded academy-pic1 d-flex justify-content-center align-items-center fw-bold' style={{ background:"white",boxShadow:"0px 2px 15px rgba(16, 110, 234, 0.15)" }}>
                <h2>Design Class</h2>
              </div>
              <div className='col-lg-5 col-md-6 col-sm-12 rounded academy-pic1 d-flex justify-content-center align-items-center fw-bold' style={{ background:"white",boxShadow:"0px 2px 15px rgba(16, 110, 234, 0.15)" }}>
                <h2>Computer Program</h2>
              </div>

          </div>
      </div>
    </section>
    <section id="testimonials-section" className='testimonials'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 info mb-5'>
                        <h3>Testimonials</h3>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                      </p>
                       <Link className='btn btn-primary ps-5 pe-5' to="/academy/#testimonial-section">Read More</Link>
                    </div>
                    <div className='col-lg-7'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                      >
                  
                      <SwiperSlide>
                        <div className="testimonial-item">
                          <div class="d-flex">
                            <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img flex-shrink-0" alt=""/>
                            <div>
                              <h3>POV Piseth</h3>
                              <h4>Freelancer</h4>
                            </div>
                          </div>
                          <p className='mb-5'>
                            Piseth, a fifth-year student at Norton University, excelled in AD Academy's Architecture Visualization program. Post-graduation, he seamlessly transitioned to freelancing with MOZ, showcasing his newfound skills professionally. His journey, captured in a striking poster, is a testament to AD Academy's impact on shaping successful careers in architectural visualization.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="testimonial-item">
                          <div className="d-flex">
                            <img src={logo} class="testimonial-img flex-shrink-0" alt=""/>
                            <div>
                              <h3>Matt Brandon</h3>
                              <h4>Freelancer</h4>
                              <div class="stars">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mb-3">
                            student Testimonial
                          </p>
                        </div>
                      </SwiperSlide>              
                        </Swiper>
                    </div>
                </div>
            </div>
       </section>
   
    <section id="faq" className="faq">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="content">
            <h3><span>Frequently Asked </span> <br/><strong>Questions</strong></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
          </div>
        </div>

        <div className="col-lg-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">

          <div className="faq-container">
            <div className={`faq-item ${activeItems[0]  ? 'faq-active' : ''}`}>
              <h3><span className="num">1.</span> <span>Non consectetur a erat nam at lectus urna duis?</span></h3>
              <div className="faq-content">
                <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
              </div>
                <FontAwesomeIcon icon={faCircleChevronRight} className="faq-toggle"  onClick={()=>toggleFAQ(0)}></FontAwesomeIcon>
            </div>

            <div className={`faq-item ${activeItems[1]  ? 'faq-active' : ''}`}>
              <h3><span className="num">2.</span> <span>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span></h3>
              <div className="faq-content">
                <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
              </div>
              <FontAwesomeIcon icon={faCircleChevronRight} className="faq-toggle" onClick={()=>toggleFAQ(1)}></FontAwesomeIcon>
            </div>

            <div className={`faq-item ${activeItems[2]  ? 'faq-active' : ''}`}>
              <h3><span className="num">3.</span> <span>Dolor sit amet consectetur adipiscing elit pellentesque?</span></h3>
              <div className="faq-content">
                <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
              </div>
                <FontAwesomeIcon icon={faCircleChevronRight} className="faq-toggle"  onClick={()=>toggleFAQ(2)}></FontAwesomeIcon>
            </div>

            <div className={`faq-item ${activeItems[3]  ? 'faq-active' : ''}`}>
              <h3><span className="num">4.</span> <span>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</span></h3>
              <div className="faq-content">
                <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
              </div>
                <FontAwesomeIcon icon={faCircleChevronRight} className="faq-toggle"  onClick={()=>toggleFAQ(3)}></FontAwesomeIcon>
            </div>

            <div className={`faq-item ${activeItems[4]  ? 'faq-active' : ''}`}>
              <h3><span className="num">5.</span> <span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span></h3>
              <div className="faq-content">
                <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
              </div>
                <FontAwesomeIcon icon={faCircleChevronRight} className="faq-toggle"  onClick={()=>toggleFAQ(4)}></FontAwesomeIcon>
            </div>

          </div>

        </div>
      </div>

    </div>

    </section>
   </>
  )
}
