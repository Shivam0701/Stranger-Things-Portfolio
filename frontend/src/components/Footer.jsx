import React from 'react';
import { personalInfo } from '../data/mockData';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="text-2xl font-bold text-red-500 mb-2">SHIVAM RAJ</h3>
            <p className="text-gray-400 text-sm font-mono">Full Stack Developer & Cybersecurity Explorer</p>
          </div>
          
          <div className="footer-center">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="#d41f2d" /> from the Upside Down
            </p>
            <p className="text-gray-600 text-xs mt-2">
              © {new Date().getFullYear()} Shivam Raj. All rights reserved.
            </p>
          </div>

          <div className="footer-right">
            <p className="text-gray-500 text-xs font-mono">
              Inspired by Stranger Things
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="footer-line"></div>
      </div>
    </footer>
  );
};

export default Footer;