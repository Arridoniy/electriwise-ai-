import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">⚡</div>
              ElectriWise
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Smarter Electrical Decisions. Safer Homes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/learning-centre" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Learning Centre
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solar-calculator" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Solar Calculator
                </Link>
              </li>
              <li>
                <Link to="/cable-calculator" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Cable Calculator
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} AR-RIDONIY Integrated Services. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
