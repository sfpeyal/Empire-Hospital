import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container py-2">
            <div className="d-flex mx-auto justify-content-around footer">
                <div className="footer-single">
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Privacy Policy</p>
                    <BsFacebook className="fs-3 me-2 text-danger" />
                    <BsInstagram className="fs-3 me-2 text-danger" />
                    <BsTwitter className="fs-3 me-2 text-danger" />
                </div>
            </div>
            <p className="text-center mt-4">Copyright &copy; 2021 Empire-Hospital</p>
        </div>

    );
};

export default Footer;