import { Link } from 'react-router-dom';
import { Triangle } from 'lucide-react';
import './footer.css';

const FacebookIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const LinkedinIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container footer-container-dark">
        <div className="footer-top-dark">
          
          <div className="footer-brand-section">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-icon-circle">
                 <Triangle size={20} fill="#6b46ff" stroke="#6b46ff" className="f-icon-rotate" />
              </div>
              <span className="footer-brand-name">Aptimaster</span>
            </Link>
            <p className="footer-brand-subtitle">Online Placement Preparation</p>
            <p className="footer-desc-text">
              Aptimaster helps students prepare smarter for placement tests with high-quality practice, mock tests, and performance analytics.
            </p>
          </div>
          
          <div className="footer-links-col">
             <h4 className="footer-col-title">Quick Links</h4>
             <ul className="footer-nav-list">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/categories">Categories</Link></li>
               <li className="sub-link"><Link to="/aptitude">Aptitude</Link></li>
               <li className="sub-link"><Link to="/reasoning">Reasoning</Link></li>
               <li className="sub-link"><Link to="/verbal">Verbal Ability</Link></li>
               <li className="sub-link"><Link to="/coding">Coding</Link></li>
               <li><Link to="/dashboard">Dashboard</Link></li>
             </ul>
          </div>
          
          <div className="footer-links-col">
             <h4 className="footer-col-title">Important Pages</h4>
             <ul className="footer-nav-list">
               <li><Link to="/results">Results</Link></li>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/signup">Signup / Login</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/categories">Categories</Link></li>
             </ul>
          </div>

          <div className="footer-newsletter">
             <h4 className="footer-col-title">Follow Us</h4>
             <div className="footer-social-links-new">
               <a href="#" className="social-link-item">
                 <FacebookIcon size={18} className="s-icon" /> Facebook
               </a>
               <a href="#" className="social-link-item">
                 <TwitterIcon size={18} className="s-icon" /> Twitter
               </a>
               <a href="#" className="social-link-item">
                 <LinkedinIcon size={18} className="s-icon" /> LinkedIn
               </a>
               <a href="#" className="social-link-item">
                 <InstagramIcon size={18} className="s-icon" /> Instagram
               </a>
             </div>
          </div>
          
        </div>
        
        <div className="footer-bottom-dark">
          <p>&copy; {new Date().getFullYear()} Aptimaster. All rights reserved.</p>
          <p>Made with ❤️ for your success</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
