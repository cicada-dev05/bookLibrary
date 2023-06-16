import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Navbar from './../Header/Navbar'
const Header = () => {
  const authorized = true;
  return (
    <div className='holder'>
      <Navbar />
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Books are referred to as a man's best friend. They are very beneficial for mankind and have helped it evolve. There is a powerhouse of information and knowledge. Books offer us so many things without asking for anything in return.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header