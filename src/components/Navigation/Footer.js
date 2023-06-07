import React from "react"
import { FaInstagram } from "react-icons/fa"
import Icon from "../../assets/Icon.png"
import { SlSocialTwitter } from "react-icons/sl"
function Footer() {
  return (
    <div className="app-footer-group">
      <div className="footer-socials">
        <img src={Icon} alt="logo.png" height={20} width={20} />
        <p>Making the world a better place</p>
        <SlSocialTwitter />
        <FaInstagram />
      </div>
      <div className="footer-pages">
        <p>
          <b>MORINGA BLOG</b>
        </p>
        <p>
          <b>ABOUTUS</b>
        </p>
        <p>
          <b>ARTICLES</b>
        </p>
      </div>
      <div className="footer-resources">
        <p>
          <b>RESOURCES</b>
        </p>
        <p>Testimonials</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
