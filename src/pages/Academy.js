import React from 'react'
import acadedybg from '../assets/images/about.jpg'
import sketch_bg_background from '../assets/images/sketch-course-bg.jpg'
export default function Academy() {
  return (
     <> 
        <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage:`url${acadedybg}` }}>
            <div className="container position-relative d-flex flex-column align-items-center">

                <h2>Academy</h2>
                <ol>
                <li><a href="#">Home</a></li>
                <li>Academy</li>
                </ol>

            </div>
        </div>
        <section id="more-courses" className="more-courses mt-5">
            <div className="container">
                <div className='section-title'>
                    <h2>All Courses</h2>
                    <p>Our courses</p>
                </div>

                <div className="row">
                <div className="col-md-6 d-flex align-items-stretch">
                    <div className="card aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" style={{ background:`url(${sketch_bg_background})` }}>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Sketch</a></h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        <div className="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="card aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Limere Radses</a></h5>
                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                        <div className="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
                    </div>
                    </div>

                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div className="card aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Nive Lodo</a></h5>
                        <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                        <div className="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div className="card aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Pale Treda</a></h5>
                        <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                        <div className="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>
        <section id="testimonials" className='testimonial-section'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Student's Testimonials</h2>
                    <p>Our motivated and talented architect student with the success stories:</p>
                </div>
            </div>
        </section>
     </>
  )
}
