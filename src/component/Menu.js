import React from 'react'
import { useState } from 'react';

function Menu(props) {

  const [rd, setRd] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const eventDark = (e) => {
    if (props.dar) {
      props.setdark(false)
    } else {
      props.setdark(true)
    }

  }
 
  return (
    <div>

      <nav className={`${props.dar ? "bg-black text-white" : "bg-blue-500 text-black"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-white text-xl font-bold">Text Analyzer</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">About</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Text-Changer</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <input
                  id="option2"
                  checked={rd}
                  type="radio"
                  className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  onClick={eventDark}
                />
                <label htmlFor="option2" className="ml-3 text-gray-700 text-lg fo">
                  Dark Mode
                </label>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-white"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</a>
              <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">About</a>
              <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">Contact</a>
               <div className="ml-10 flex items-baseline space-x-4">
                <input
                  id="option2"
                  checked={rd}
                  type="radio"
                  className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  onClick={eventDark}
                />
                <label htmlFor="option2" className="ml-3 text-gray-700 text-lg fo">
                  Dark Mode
                </label>
              </div>
            </div>
          </div>
        )}
      </nav>

    </div>
  )
}

export default Menu
