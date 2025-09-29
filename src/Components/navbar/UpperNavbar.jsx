import { useState } from 'react';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabItens, setTabItens] = useState(["Home", "Login"])

  return (
    <>
      <div>
        <nav className="bg-slate-950 w-full top-0 z-50 shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo / Brand */}
              <div className="flex-shrink-0 text-white font-bold text-xl">
                <a href="#">Homepage</a>
              </div>

              {/* Menu desktop */}
              <div className="hidden md:flex space-x-4">
                {tabItens.map((item) => (
                  <a
                    key={item}
                    href={'#' + item}
                    className='text-white hover:text-gray-950 no-underline'
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Toggle mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                >
                  {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Menu mobile */}
          {isOpen && (
            <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-slate-900">
              <a href="#home" className="block text-white hover:text-gray-300">Home</a>
              <a href="#login" className="block text-white hover:text-gray-300">Login</a>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default MyNavbar;
