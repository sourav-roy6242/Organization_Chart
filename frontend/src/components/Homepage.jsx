import React from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported correctly
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="home-page">
      
      <header className="home-header">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the Organizational Chart System</h1>
          <p className="hero-subtitle">
            Visualize and manage your organization's structure seamlessly.
          </p>
          {/* Button replaced by Link */}
          <Link to="/Org-chart" className="cta-button">
            Explore Organizational Chart
          </Link>
        </div>
      </header>

      <section className="home-navigation">
        <h2 className="section-title">Get Started</h2>
        <div className="navigation-cards">
          <div className="card">
            <h3>View Organizational Chart</h3>
            <p>
              Explore the hierarchy and understand roles within the organization.
            </p>
            {/* Using Link here to navigate to /Org-chart */}
            <Link to="/Org-chart" className="nav-button">
              Go to Chart
            </Link>
          </div>
          <div className="card">
            <h3>Manage Roles</h3>
            <p>
              Add, edit, or remove roles in your organization with ease.
            </p>
            <Link to="/userform" className="nav-button">
              Manage Roles
            </Link>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 Organizational Chart System. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> |{' '}
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
