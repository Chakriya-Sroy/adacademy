import React from 'react'

export default function About() {
  return (
      <>
        <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage:" url('assets/img/about-header.jpg')" }}>
            <div className="container position-relative d-flex flex-column align-items-center">

                <h2>About</h2>
                <ol>
                <li><a href="index.html">Home</a></li>
                <li>About</li>
                </ol>

            </div>
        </div>
        <section id="message-from-school-director" className='message-from-school-director'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Message From School Director</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <img className='img-fluid'src="" alt="director-profile"/>
                    </div>
                    <div className='col-lg-6 col-sm-12' style={{ boxShadow: "0px 2px 15px rgba(16, 110, 234, 0.15)" }}>
                        <h3>Director Name</h3>
                        <p>Paragraph</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="mission-vision-core" className="mission-vision-core">
            <div className="container " data-aos="fade-up">
                <div className="section-title">
                    <h2>Mission Vision & Core Value</h2>
                    <h3>Our mission vission and core value</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-12" style={{ boxShadow: "0px 2px 15px rgba(16, 110, 234, 0.15)" }}>
                        <div className="mission-item p-3">
                            <h4 className='text-center'>Mission</h4>
                            <p>To empower design practice for confident industry entry. <br/>
                                To develop aesthetic thinking for student, professional architect and designer
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={{ boxShadow: "0px 2px 15px rgba(16, 110, 234, 0.15)" }}>
                        <div className="mission-item p-3 ">
                            <h4 className="text-center">Vision</h4>
                            <p>To be the leading local design training center in Cambodia. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={{ boxShadow: "0px 2px 15px rgba(16, 110, 234, 0.15)" }}>
                        <div className="mission-item p-3">
                            <h4 className="text-center">Core Value</h4>
                            <p> Be the Change,
                                Purpose Driven,
                                Respect Different & Unity,
                                Act with Integrity,
                                Stay Creative Stay Curious
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
        <section id="team" className="team section-bg">
        <div className="container " data-aos="fade-up">
            <div class="section-title">
            <h2>Co-founder</h2>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>

            <div className="row d-flex justify-content-around">
                    <div className="col-lg-4 col-md-6 d-flex" style={{ boxShadow:" 0px 2px 15px rgba(16, 110, 234, 0.15)" }}>
                        <div className="member">
                        <div className="member-img">
                            <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/>
                        </div>
                        <div className="member-info">
                            <h4>CHAN Beta</h4>
                            <span>CEO - Founder</span>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex" style={{ boxShadow:" 0px 2px 15px rgba(16, 110, 234, 0.15)" }}>
                        <div className="member">
                        <div className="member-img">
                            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="member-info">
                            <h4>PHON Bunheng</h4>
                            <span>Academy Director - Co-founder</span>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        </section>
      
      </>
  )
}
