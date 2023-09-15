import React from 'react'
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="Homepage">
        <div className='homepage__top'>
            <div className='homepage__topleft'></div>
        </div>
       
    <img src='/images/logo.webp' alt='homepage' />
    
    <div className='homepage__top-right'>
       <h1 className='home__top-right--title'>Happening now</h1>
       <h2 className='homepage__top-right--subtitle'>Join Twitter today.</h2>
       <div className='homepage__top-right--btns'>
       <button className='btn_primary'>Sign Up with Google</button>
       <button className='btn_primary'>Sign Up with Apple</button>
       <button className='btn_secondary'>Sign up with phone or email
       </button>
       <p className='homepage__right--policies'>
        By signing up, you agree to the <a href=' '>Terms of Service </a> and{' '}
        <a href=' '>Privacy Policy</a>, including{' '}
        <a href=' '>Cookie Use.</a>
       </p>
    </div>
    <div className='homepage__top-right--btns'>
        <h3>Already have an Account ?</h3>
        <button className='btn_primary'>Sign in</button>
    </div>
    </div>
    <footer className='footer'>
        <ul className='footer__list'>
            <li className='footer__list__item'>
            <a href='/'>About</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Help Center</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Terms of Service</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Privacy Policy</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Cookie Policy</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Accessibility</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Ads Info</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Blog</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Status</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Careers</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Brand Resources</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Advertising</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Twitter for Business</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Marketing</a>
            </li>
            <li className='footer__list__item'>
            <a href='/'>Directory</a>
            </li>
            
            
        </ul>
        <p className='footer__copyright'>
            {" "}
            <a href='/'>Settings</a>
            <span>&copy; </span>
        </p>
    </footer>
    </div>
    

  );
};

export default Homepage