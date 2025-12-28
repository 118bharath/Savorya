import React from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
    return (
        <div className='footer bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-5 py-5 pt-20 px-[8vw] mt-24' id='footer'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-20'>
                <div className="footer-content-left flex flex-col items-start gap-5">
                    <span className='text-3xl font-bold text-tomato cursor-pointer'>
                        Savorya
                    </span>
                    <p>transform everyday cravings into delightful experiences, connecting you with mouthwatering meals from top local chefs.
                        Order in seconds, savor in moments
                        Indulge your appetite and let Savorya deliver happiness right to your doorstep.</p>
                    <div className="footer-social-icons flex">
                        <img src={assets.facebook_icon} alt="" className="w-10 mr-4 cursor-pointer" />
                        <img src={assets.twitter_icon} alt="" className="w-10 mr-4 cursor-pointer" />
                        <img src={assets.linkedin_icon} alt="" className="w-10 mr-4 cursor-pointer" />
                    </div>
                </div>
                <div className="footer-content-center flex flex-col items-start gap-5">
                    <h2 className="text-2xl font-bold text-white">COMPANY</h2>
                    <ul className="list-none">
                        <li className="mb-2.5 cursor-pointer">Home</li>
                        <li className="mb-2.5 cursor-pointer">About Us</li>
                        <li className="mb-2.5 cursor-pointer">Delivery</li>
                        <li className="mb-2.5 cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right flex flex-col items-start gap-5">
                    <h2 className="text-2xl font-bold text-white">GET IN TOUCH</h2>
                    <ul className="list-none">
                        <li className="mb-2.5 cursor-pointer">+91-11111-11111</li>
                        <li className="mb-2.5 cursor-pointer">contact@savorya.com</li>
                    </ul>
                </div>
            </div>
            <hr className="w-full h-0.5 my-5 bg-gray-500 border-none" />
            <p className='footer-copyright'>Copyright 2024 © Savorya.com - All Right Reserved.</p>
        </div>
    );
};

export default Footer;