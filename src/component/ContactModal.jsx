import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-[1100px] bg-white rounded-[15px] p-8 md:p-16 shadow-2xl overflow-y-auto max-h-[95vh] font-sans"
          >
            
            {/* Close Button - Exact Circle Icon */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-black hover:opacity-70 transition-opacity"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" fill="black"/>
                <path d="M15 9L9 15M9 9L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Header Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-[10px] h-[10px] rounded-full bg-[#a855f7] shadow-[0_0_10px_#a855f7]"></span>
                <span className="text-[#a855f7] text-lg font-light">Let's Get Started</span>
              </div>
              <h2 className="text-5xl md:text-[64px] font-[300] text-[#1a1a1a] leading-[1.1] tracking-tight">
                This Could Be the Start of <br />
                <span className="font-[400]">Something Incredible!</span>
              </h2>
            </div>

            {/* Form Section */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Inputs with exact border-radius and light text */}
              <input type="text" placeholder="Name*" className="w-full border border-gray-300 rounded-[12px] px-6 py-4 placeholder:text-gray-400 text-gray-700 focus:outline-none focus:border-[#8b2cf5]" />
              
              <input type="text" placeholder="Name of your company / organisation*" className="w-full border border-gray-300 rounded-[12px] px-6 py-4 placeholder:text-gray-400 text-gray-700 focus:outline-none focus:border-[#8b2cf5]" />
              
              <div className="flex border border-gray-300 rounded-[12px] overflow-hidden focus-within:border-[#8b2cf5]">
                 <div className="pl-6 pr-2 flex items-center gap-2 text-gray-600 text-sm border-r border-gray-200">
                    <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="w-5" />
                    <span>+971</span>
                    <span className="text-[10px]">▼</span>
                 </div>
                 <input type="tel" placeholder="Phone No*" className="w-full px-4 py-4 focus:outline-none placeholder:text-gray-400" />
              </div>

              <input type="email" placeholder="Email*" className="w-full border border-gray-300 rounded-[12px] px-6 py-4 placeholder:text-gray-400 text-gray-700 focus:outline-none focus:border-[#8b2cf5]" />

              <div className="relative">
                <select className="w-full border border-gray-300 rounded-[12px] px-6 py-4 text-gray-400 appearance-none bg-transparent focus:outline-none focus:border-[#8b2cf5]">
                  <option>Service you are interested in*</option>
                </select>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</span>
              </div>

              <div className="relative">
                <select className="w-full border border-gray-300 rounded-[12px] px-6 py-4 text-gray-400 appearance-none bg-transparent focus:outline-none focus:border-[#8b2cf5]">
                  <option>Project Timeline*</option>
                </select>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</span>
              </div>

              {/* Budget Slider */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold text-gray-600 uppercase tracking-tight">
                  <span>USD 5K</span>
                  <span>USD 100K+</span>
                </div>
                <div className="relative h-8 flex items-center">
                  {/* Custom Track Background to match image */}
                  <div className="absolute w-full h-3 bg-[#8b2cf5] rounded-full"></div>
                  <input 
                    type="range" 
                    className="absolute w-full h-3 bg-transparent appearance-none cursor-pointer accent-white" 
                    style={{
                      WebkitAppearance: 'none',
                    }}
                  />
                  {/* Decorative white circles for the range handles as seen in image */}
                  <div className="absolute left-0 w-4 h-4 rounded-full border-2 border-[#8b2cf5] bg-white translate-x-0"></div>
                  <div className="absolute right-0 w-4 h-4 rounded-full border-2 border-[#8b2cf5] bg-white"></div>
                </div>
                <p className="text-[13px] leading-snug text-gray-500 font-light max-w-[350px]">
                  A transparent budget will help us ensure expectations are met. Not sure? Ballparks are fine.
                </p>
              </div>

              {/* Textarea */}
              <textarea 
                placeholder="Tell us about your project" 
                rows="4" 
                className="w-full border border-gray-300 rounded-[12px] px-6 py-4 focus:outline-none focus:border-[#8b2cf5] placeholder:text-gray-400 text-gray-700"
              ></textarea>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button className="bg-gradient-to-r from-[#5a24ff] to-[#bd2df5] hover:opacity-90 text-white font-bold py-4 px-16 rounded-full transition-all text-sm uppercase tracking-wide">
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};