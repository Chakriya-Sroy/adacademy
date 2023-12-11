import React from 'react'
import Hero from '../components/Hero';
export default function Resource() {
  return (
     <>
        <Hero page="Resource"></Hero>
        <section id="events-and-programs" className='events-and-programs'>  
            <div className='container'>
                <div className='section-title'>
                    <h2>Events and Programs</h2>
                </div>
            </div>
        </section>
        <section id="knowleges-sharing" className='knowleges-sharing'>  
            <div className='container'>
                <div className='section-title'>
                    <h2>Knowledge Sharing</h2>
                </div>
            </div>
        </section>
        <section id="books" className='books'>  
            <div className='container'>
                <div className='section-title'>
                    <h2>Books</h2>
                </div>
            </div>
        </section>
        <section id="resourceful-files" className='resourceful-files'>  
            <div className='container'>
                <div className='section-title'>
                    <h2>Resourceful Files</h2>
                    <p>Academy help to provide students and support with guidance in their academic. Connect with professionals in their field of interest. Learn about career opportunities and internships. </p>
                </div>
            </div>
        </section>
        <section id="blogs" className='blogs'>  
            <div className='container'>
                <div className='section-title'>
                    <h2>Blogs</h2>
                </div>
            </div>
        </section>
     </>
  )
}
