import React from 'react';
// import "./About.css";
import aboutImg from "../images/about-img.jpg";
import BookList from '../components/BookList/BookList';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Cart</h2>
        </div>
        <BookList />
      </div>
    </section>
  )
}

export default About