import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-orange text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-lg-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Facebook</a></li>
              <li className="list-inline-item"><a href="#">Twitter</a></li>
              <li className="list-inline-item"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
