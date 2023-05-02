import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className='container mx-auto'>
          <footer className="footer p-10  text-neutral-content">
            <div>
                <span className="footer-title text-3xl">Our Services</span>
                <a className="link link-hover">Fast Delivery</a>
                <a className="link link-hover">Vegan Cuisine</a>
                <a className="link link-hover">Fresh Products</a>
                <a className="link link-hover">Skilled Chefs</a>
            </div>
            <div>
                <span className="footer-title text-3xl">Quick Links</span>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
            <div>
                <span className="footer-title text-3xl">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
      </div>
    );
};

export default Footer;