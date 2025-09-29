import { useState } from 'react';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabItens, setTabItens] = useState(["Home", "Login"])

  // WIP necessity of doing an conditional here to increase or decrease menu states IF AN FETCH APPROVES CONNECTION

  return (
    <>
      <div>
        <nav className="bg-stone-950 w-full top-0 z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16">
              
                {/* Logo / Brand */}
              <div className="flex-shrink-0 text-white font-bold text-2xl ">
                <a href="#">Homepage</a>
              </div>

              {/* Menu desktop */}
              <div className="hidden md:flex space-x-4">
                {
                  tabItens.map((item) => (
                    <a
                      key={item}
                      href={'#' + item}
                      className='text-white hover:text-gray-900 no-underline'
                    >
                      {item}
                    </a>
                  )
                  )
                }
              </div>

              {/* mobile Toggle */}
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

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden bg-stone-900">
              {
                tabItens.map((item) => (
                  <a
                    key={item}
                    href={'#' + item}
                    className='block text-white hover:text-gray-950 no-underline'
                  >
                    {item}
                  </a>
                )
                )
              }
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default MyNavbar;
