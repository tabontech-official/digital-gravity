export const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-[20px] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[95vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-black hover:scale-110 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8b2cf5]"></span>
            <span className="text-[#8b2cf5] text-sm font-medium">Let's Get Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            This Could Be the Start of <br />
            <span className="font-normal">Something Incredible!</span>
          </h2>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name*" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-[#8b2cf5]" />
          <input type="text" placeholder="Name of your company / organisation*" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-[#8b2cf5]" />
          
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
             <div className="bg-gray-50 px-3 flex items-center border-r">🇦🇪 +971</div>
             <input type="tel" placeholder="Phone No*" className="w-full px-4 py-3 focus:outline-none" />
          </div>
          <input type="email" placeholder="Email*" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-[#8b2cf5]" />

          <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 focus:outline-[#8b2cf5]">
            <option>Service you are interested in*</option>
          </select>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 focus:outline-[#8b2cf5]">
            <option>Project Timeline*</option>
          </select>

          {/* Budget Slider & Textarea Container */}
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <span>AED 5K</span>
              <span>AED 100K+</span>
            </div>
            <input type="range" className="w-full h-2 bg-[#8b2cf5] rounded-lg appearance-none cursor-pointer accent-[#8b2cf5]" />
            <p className="text-xs text-gray-500">
              A transparent budget will help us ensure expectations are met. Not sure? Ballparks are fine.
            </p>
          </div>

          <textarea 
            placeholder="Tell us about your project" 
            rows="4" 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-[#8b2cf5] md:row-span-1"
          ></textarea>

          <div className="md:col-span-2">
            <button className="bg-[#8b2cf5] hover:bg-[#7c1df0] text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};