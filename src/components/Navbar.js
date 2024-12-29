'use client';
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white p-4 shadow-md sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={'/'}>
          <div className="text-gray-800 font-bold text-xl">
            VeeCloud
          </div>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition duration-300">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-300">
              Home
            </a>
            <a href="/about" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-300">
              About
            </a>
            <a href="contact" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar