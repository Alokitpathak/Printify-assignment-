import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="Printify Logo" /> {}
      </div>
      <div className="footer-columns">
        {}
        <div className="footer-column">
          <h3>Integrations</h3>
          <ul>
            <li>Shopify</li>
            <li>Etsy</li>
            <li>eBay</li>
            <li>Amazon</li>
            <li>TikTok Shop</li>
            <li>PrestaShop</li>
            <li>BigCommerce</li>
            <li>WooCommerce</li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Discover</h3>
          <ul>
            <li>Blog</li>
            <li>Guides</li>
            <li>Products</li>
            <li>Etsy print-on-demand</li>
            <li>Shopify print-on-demand</li>
            <li>Woocommerce print-on-demand</li>
            <li>Wix print-on-demand</li>
            <li>Squarespace print-on-demand</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Start Selling</h3>
          <ul>
            <li>Custom T-shirts</li>
            <li>Custom Hoodies</li>
            <li>Custom Mugs</li>
            <li>Custom Socks</li>
            <li>Custom Backpacks</li>
            <li>Custom Branding</li>
            <li>Sell on Etsy</li>
            <li>Sell on Social Media</li>
            <li>Free T-shirt Designs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Printify</h3>
          <ul>
            <li>Print on Demand</li>
            <li>Print Providers</li>
            <li>Experts Program</li>
            <li>Printify Express Delivery</li>
            <li>Become a Partner</li>
            <li>About</li>
            <li>Printify Quality Promise</li>
            <li>Jobs</li>
            <li>Webinars</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
     
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-xing"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-tiktok"></i></a>
        <a href="#"><i className="fab fa-reddit"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
