
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="kartini-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-playfair font-bold text-kartini-purple">
                Kartini<span className="text-kartini-gold">Day</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-kartini-purple font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-kartini-purple font-medium transition-colors">
              About Kartini
            </a>
            <a href="#events" className="text-gray-700 hover:text-kartini-purple font-medium transition-colors">
              Events
            </a>
            <a href="#timeline" className="text-gray-700 hover:text-kartini-purple font-medium transition-colors">
              Timeline
            </a>
            <a href="#resources" className="text-gray-700 hover:text-kartini-purple font-medium transition-colors">
              Resources
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#hero" 
                className="text-gray-700 hover:text-kartini-purple font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-kartini-purple font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Kartini
              </a>
              <a 
                href="#events" 
                className="text-gray-700 hover:text-kartini-purple font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a 
                href="#timeline" 
                className="text-gray-700 hover:text-kartini-purple font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Timeline
              </a>
              <a 
                href="#resources" 
                className="text-gray-700 hover:text-kartini-purple font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
