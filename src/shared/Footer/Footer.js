import React from 'react';
import social from '../../assets/icons/Group 9969.png'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
            <div>
                <h2 className='text-3xl font-bold mb-4'>Job Hunting</h2>
                <p className='mb-4'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                <img src={social} alt="" />
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Product</span>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a href="/" className="link link-hover">Help Desk</a>
                <a href="/" className="link link-hover">Sales</a>
                <a href="/" className="link link-hover">Become a Partner</a>
                <a href="/" className="link link-hover">Devlopers</a>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <a href="/" className="link link-hover">524 Broadway, NYC</a>
                <a href="/" className="link link-hover">+1777-978-5570</a>

            </div>
        </footer>
    );
};

export default Footer;