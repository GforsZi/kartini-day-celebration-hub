
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="kartini-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold text-kartini-purple mb-4">Kartini Day</h3>
            <p className="text-gray-600 mb-4">
              Celebrating the legacy of Raden Adjeng Kartini, Indonesian national hero and pioneer in women's rights and education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-kartini-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-kartini-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-kartini-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold text-kartini-purple mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-kartini-purple transition-colors">About Kartini</a>
              </li>
              <li>
                <a href="#events" className="text-gray-600 hover:text-kartini-purple transition-colors">Events</a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-600 hover:text-kartini-purple transition-colors">Timeline</a>
              </li>
              <li>
                <a href="#resources" className="text-gray-600 hover:text-kartini-purple transition-colors">Resources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold text-kartini-purple mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">Email: info@kartiniday.org</p>
            <p className="text-gray-600 mb-2">Phone: +62 123 456 7890</p>
            <p className="text-gray-600">Address: Jepara, Central Java, Indonesia</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Kartini Day Celebration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
