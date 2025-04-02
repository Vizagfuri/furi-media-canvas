
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AlignRight, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-furi-600">Furi</span>
              <span className="text-2xl font-normal ml-1">Media School</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-sm font-medium hover:text-furi-600 transition-colors">
              Courses
            </a>
            <a href="#about" className="text-sm font-medium hover:text-furi-600 transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-furi-600 transition-colors">
              Success Stories
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-furi-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-furi-600 text-furi-600 hover:bg-furi-50">
              Log in
            </Button>
            <Button className="bg-furi-600 hover:bg-furi-700">
              Enroll Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-furi-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#courses"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-furi-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-furi-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-furi-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-furi-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-3">
              <Button variant="outline" className="w-full border-furi-600 text-furi-600 hover:bg-furi-50">
                Log in
              </Button>
            </div>
            <div className="mt-3 px-5">
              <Button className="w-full bg-furi-600 hover:bg-furi-700">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
